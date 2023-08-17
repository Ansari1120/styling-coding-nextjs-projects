"use client";
import FormattedHTML from "@/app/components/FormattedHtml";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
interface blogTypes {
  title: string;
  description: string;
  imageSrc: string;
}
export default function Page({ params }: { params: { id: string } }) {
  const [blogs, setBlogs] = useState<blogTypes>({});
  useEffect(() => {
    async function getSingleBlog() {
      const res = await axios.get(`/api/post/${params.id}`);
      setBlogs({ ...res.data });
    }
    getSingleBlog();
  }, []);
  console.log(blogs);

  return (
    <div className="mt-24 mx-14">
      <h1 className="font-bold text-3xl font-serif">{blogs.title}</h1>
      <Image className="h-[996px]  w-[996px]" src={blogs.imageSrc} width={400} height={400} alt="blog image" />
      {/* <p className="mt-4 font-serif text-base">{blogs.description}</p> */}
      <FormattedHTML content={blogs.description} />
    </div>
  );
}
