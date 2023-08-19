"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Loader from "../../../../public/loader.gif";
import LoaderTwo from "../../../../public/loader2.gif";
export default function Login() {
  const params = useSearchParams();
  const router = useRouter();
  const [cridentials, setCridentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFaceBook, setLoadingFaceBook] = useState(false);
  const [errors, setErrors] = useState<any>([]);

  const submitForm = async () => {
    setLoading(true);
    console.log(cridentials);
    await axios
      .post("/api/auth/login", cridentials)
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
  const EnterKeyPress = (e: any) => {
    if (e.key === "Enter" && e.keyCode === 13) {
      console.log("enter key pressed!");
      e.preventDefault();
      submitForm();
    }
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
              Sign in
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
                      className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-black  disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-black  disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onKeyDown={EnterKeyPress}
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
                    disabled={loading ? true : false}
                    onClick={submitForm}
                    type="button"
                    className={` ${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    } inline-flex w-full items-center justify-center bg-black  rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white`}
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
            <p className="text-center my-5">
              <span className="hidden md:inline">---</span>
              <span className="hidden lg:inline">-----</span>
              <span className=" inline">-------</span>{" "}
              <span className="inline">OR</span>{" "}
              <span className=" inline">-------</span>{" "}
              <span className="hidden lg:inline">-----</span>
              <span className="hidden md:inline">---</span>{" "}
            </p>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={GithubSignin}
              >
                {!loadingGithub && (
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </span>
                )}
                {loadingGithub ? (
                  <div className="flex items-center">
                    <div className="mr-2">processing</div>
                    <div>
                      <Image src={Loader} width={20} height={20} alt="loader" />
                    </div>
                  </div>
                ) : (
                  "Sign in with GitHub"
                )}
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={GoogleSignin}
              >
                {!loadingGoogle && (
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 7v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42S5.61 3.58 8 3.58c1.36 0 2.27.58 2.79 1.08l1.9-1.83C11.47 1.69 9.89 1 8 1 4.13 1 1 4.13 1 8s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H8z"></path>
                    </svg>
                  </span>
                )}
                {loadingGoogle ? (
                  <div className="flex items-center">
                    <div className="mr-2">processing</div>
                    <div>
                      <Image src={Loader} width={20} height={20} alt="loader" />
                    </div>
                  </div>
                ) : (
                  "Sign in with Google"
                )}
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={FacebookSignin}
              >
                {!loadingFaceBook && (
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path>
                    </svg>
                  </span>
                )}

                {loadingFaceBook ? (
                  <div className="flex items-center">
                    <div className="mr-2">processing</div>
                    <div>
                      <Image src={Loader} width={20} height={20} alt="loader" />
                    </div>
                  </div>
                ) : (
                  "Sign in with Facebook"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="splashImage"
          />
        </div>
      </div>
    </section>
  );
}
