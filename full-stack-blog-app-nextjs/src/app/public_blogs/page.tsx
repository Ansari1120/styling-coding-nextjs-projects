import React, { cache } from "react";
import PublicList from "../components/PublicPostList";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
async function getPosts() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/login");
  }

  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
const page = async () => {
  const data = await getPosts();
  console.log(data);
  return (
    <div className="mt-10 absolute lg:left-[92px]">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold border-l-8 border-white pl-4">
          Our Blogs{" "}
        </h1>
        <PublicList posts={data} />
      </div>
    </div>
  );
};

export default page;
