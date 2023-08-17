"use client";
import FormattedHTML from "@/app/components/FormattedHtml";
import Loader from "@/lib/loader";
import axios from "axios";
import Image from "next/image";
import { Suspense } from "react";
import { useEffect, useState } from "react";
interface blogTypes {
  title: string;
  description: string;
  imageSrc: string;
}
export default function Page({ params }: { params: { id: string } }) {
  const [blogs, setBlogs] = useState<blogTypes>({
    title: "",
    description: "",
    imageSrc: "",
  });
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
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
