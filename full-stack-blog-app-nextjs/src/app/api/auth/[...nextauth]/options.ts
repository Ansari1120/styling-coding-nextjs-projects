import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/lib/mongo.config";
import { User } from "@/model/userModel";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import prisma from "@/lib/prismaClient";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail:",
          type: "email",
          placeholder: "Enter Your E-mail",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const headersList = headers();
        const referer = headersList.get("referer");

        console.log("referer", referer);
        if (referer === "http://localhost:3000/admin") {
          console.log("admin authorize called !");
          const user = await prisma.admin.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user || !user?.hashedPassword) {
            throw new Error("Invalid credentials");
          }
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isCorrectPassword) {
            throw new Error("Invalid credentials");
          }
          return user;
        } else {
          console.log("user authorize called !");
          connect();
          const user = await User.findOne({ email: credentials?.email });
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          } else {
            return null;
            // If you return null then an error will be displayed advising the user to check their details.

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email }) {
      try {
        const headersList = headers();
        const referer = headersList.get("referer");
        if (referer === "http://localhost:3000/admin") {
          const findUser = await prisma.admin.findUnique({
            where: {
              email: user.email,
            },
          });
          if (findUser) {
            return true;
          }
          await prisma.admin.create({
            data: {
              name: user.name,
              email: user.email,
            },
          });
          return true;
        } else {
          connect();

          const findUser = await User.findOne({ email: user.email });

          if (findUser) {
            return true;
          }
          await User.create({ name: user.name, email: user.email });
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
