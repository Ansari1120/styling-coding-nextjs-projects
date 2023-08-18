"use client";
import FormattedHTML from "@/app/components/FormattedHtml";
import Comments from "@/app/components/comments";
import Loader from "@/lib/loader";
import axios from "axios";
import { Dot } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { useEffect, useState } from "react";
interface blogTypes {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  comments: [];
}
export default function Page({ params }: { params: { id: string } }) {
  const [blogs, setBlogs] = useState<blogTypes>({
    id: "",
    title: "",
    description: "",
    imageSrc: "",
    comments: [],
  });
  const dateOptions: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions: any = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  };
  useEffect(() => {
    async function getSingleBlog() {
      const res = await axios.get(`/api/post/${params.id}`);
      setBlogs({ ...res.data });
    }
    getSingleBlog();
  }, []);
  console.log(blogs);

  return (
    <>
      {blogs.title.length > 0 ? (
        <div className="mt-16 lg:mx-14 mx-4">
          <h1 className="font-bold text-4xl font-serif">{blogs.title}</h1>
          {/* <Image
            className="h-[996px]  w-[996px]"
            src={blogs.imageSrc}
            width={400}
            height={400}
            alt="blog image"
          /> */}
          <div className="text-xl mt-5">
            <FormattedHTML content={blogs.description} />
          </div>
          <div>
            {/* <section className="dark:bg-gray-900 py-8 lg:py-16">
              <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                    Discussion (20)
                  </h2>
                </div>
                <form className="my-6">
                  <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      className="px-0 row-start-7 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Post comment
                  </button>
                </form>
              </div>
            </section> */}

            <h1 className="mt-10 font-bold text-2xl mb-5">
              {blogs.comments.length} Comments
            </h1>
            <form className="my-6">
              <div className="py-2 px-4 mb-4 shadow-xl bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  rows={10}
                  id="comment"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 bg-blue-600 px-4 text-base font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>

            {blogs.comments.map((x: any) => {
              return (
                <div key={x.id}>
                  <div className="flex space-x-1 items-center">
                    <span className="text-base text-gray-100">
                      {x.commenterName}{" "}
                    </span>
                    <Dot />
                    <span className="text-md  text-gray-900 dark:text-white">
                      {new Date(x.createdAt).toLocaleString(
                        "en-US",
                        dateOptions
                      )}
                    </span>
                    <span>
                      <Dot />
                    </span>
                    <span className="text-md  text-gray-900 dark:text-white">
                      {new Date(x.createdAt).toLocaleString(
                        "en-US",
                        timeOptions
                      )}
                    </span>
                  </div>
                  <p className="my-5 text-md border rounded-md border-black p-2 bg-blue-100 shadow-xl">
                    {x.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
