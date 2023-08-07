"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Loader from "../../../../public/loader.gif";
import LoaderTwo from "../../../../public/loader2.gif";
export default function Admin() {
  const params = useSearchParams();
  const [cridentials, setCridentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFaceBook, setLoadingFaceBook] = useState(false);
  const [errors, setErrors] = useState<any>([]);
  const submitForm = () => {
    setLoading(true);
    console.log(cridentials);
    axios
      .post("/api/auth/adminlogin", cridentials)
      .then((res: any) => {
        setLoading(false);
        console.log(res);
        const response = res.data;
        if (response.status == 200) {
          console.log(response.message);
          signIn("credentials", {
            email: cridentials.email,
            password: cridentials.password,
            callbackUrl: "/", // where to land when logged in.
            redirect: true,
          });
        } else if (response?.status == 404) {
          console.log(response.message);
          if (response.message) {
            setErrors(response);
          } else {
            const { errors } = response;
            setErrors(errors);
          }
        } else {
          const { errors } = response;
          setErrors(errors);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log("somethng went wrong", e);
      });
  };
  const GithubSignin = () => {
    setLoadingGithub(true);
    signIn("github", {
      callbackUrl: "/",
      redirect: true,
    })
      .then(() => {
        console.log("sucessfully signed in with github");
        setLoadingGithub(false);
      })
      .catch((e) => {
        console.log("something went wrong", e);
        setLoadingGithub(false);
      });
  };
  const GoogleSignin = () => {
    setLoadingGoogle(true);
    signIn("google", {
      callbackUrl: "/",
      redirect: true,
    })
      .then(() => {
        console.log("sucessfully signed in with google");
        setLoadingGoogle(false);
      })
      .catch((e) => {
        console.log("something went wrong", e);
        setLoadingGoogle(false);
      });
  };
  const FacebookSignin = () => {
    setLoadingFaceBook(true);
    signIn("facebook", {
      callbackUrl: "/",
      redirect: true,
    })
      .then(() => {
        console.log("sucessfully signed in with facebook");
        setLoadingFaceBook(false);
      })
      .catch((e) => {
        console.log("something went wrong", e);
        setLoadingFaceBook(false);
      });
  };
  console.log(errors);
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Administrator
            </h2>
            {params.get("message") ? (
              <p className="mt-2 bg-green-500 font-bold rounded-md p-4">
                {params.get("message")}
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  title="navigate to registration page"
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
            )}
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setCridentials({
                          ...cridentials,
                          email: e.target.value,
                        })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors.length >= 2 && !errors.message
                        ? errors
                            .filter((obj: any) => obj.field == "email")
                            .map((obj: any) => obj.message)
                        : errors.message}
                      {/* {errors} */}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setCridentials({
                          ...cridentials,
                          password: e.target.value,
                        })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors.length >= 2 && !errors.message
                        ? errors
                            .filter((obj: any) => obj.field == "password")
                            .map((obj: any) => obj.message)
                        : ""}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={submitForm}
                    type="button"
                    className={`inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white`}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="mr-2">processing</div>
                        <div>
                          <Image
                            src={LoaderTwo}
                            width={20}
                            height={20}
                            alt="loader"
                          />
                        </div>
                      </div>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}