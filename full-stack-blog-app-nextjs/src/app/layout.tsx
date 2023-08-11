import AuthProvider from "@/context/authProvider";
import Header from "./components/header";
import { cookies } from "next/headers";
import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blogista",
  description: "MY Blog App",
};

{/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const nextToken = cookieStore.get("next-auth.session-token");
  console.log(nextToken);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <div className="bg-scroll bg-my_bg_image bg-cover mx-auto py-5 justify-center bg-no-repeat">
            {nextToken?.value ? <Navbar /> : null}
          {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
