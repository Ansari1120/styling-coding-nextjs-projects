"use client";
import axios from "axios";
import { useEffect, useState } from "react";
interface blogTypes {
  title: string;
  description: string;
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
      <p className="mt-4 font-serif text-base">{blogs.description}</p>
    </div>
  );
}
