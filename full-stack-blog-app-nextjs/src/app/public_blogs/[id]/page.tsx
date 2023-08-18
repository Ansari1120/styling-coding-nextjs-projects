"use client";
import FormattedHTML from "@/app/components/FormattedHtml";
import Loader from "@/lib/loader";
import axios from "axios";
import { Dot } from "lucide-react";
import Load from "../../../../public/loading.gif";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

interface blogTypes {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  comments: [];
}
interface CommentType {
  content: string;
  blogID: string;
  commenterName: string | undefined | null;
}
export default function Page({ params }: { params: { id: string } }) {
  const { data: session, status } = useSession(); // Use the useSession hook
  const router = useRouter();
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  const [blogs, setBlogs] = useState<blogTypes>({
    id: "",
    title: "",
    description: "",
    imageSrc: "",
    comments: [],
  });
  const [comment, setComment] = useState<CommentType>({
    content: "",
    blogID: params.id,
    commenterName: session?.user?.name,
  });
  const [loading, setLoading] = useState(false);
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
  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true);
    const updatedComment = {
      content: comment.content,
      blogID: params.id,
      commenterName: session?.user?.name,
    };
    try {
      await axios.post(`http://localhost:3000/api/comment`, updatedComment);
      console.log("success");
      router.refresh();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setComment({
        content: "",
        blogID: params.id,
        commenterName: session?.user?.name,
      });
    }
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
              <h1 className="mt-10 font-bold text-2xl mb-5">
                {blogs.comments.length} Comments
              </h1>
              <form className="my-6" onSubmit={onSubmit}>
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
                    onChange={(e) =>
                      setComment({ ...comment, content: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={` ${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  } inline-flex items-center py-2.5 bg-blue-600 px-4 text-base font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800`}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="mr-2">processing</div>
                      <div>
                        <Image src={Load} width={20} height={20} alt="loader" />
                      </div>
                    </div>
                  ) : (
                    "Post a Comment"
                  )}
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
