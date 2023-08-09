import React, { cache } from "react";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function getPosts() {
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
  const session = await getServerSession(options);
  console.log("yoo man hers then session", session);
  function containsAdmin(input: string): boolean {
    const targetWord = "admin";
    return input.includes(targetWord);
  }
  const inputString: any = session?.user?.email;

  if (containsAdmin(inputString)) {
    console.log("The input string contains the word 'admin'.");
  } else {
    redirect("/");
  }
  return (
    <div className="mt-10 absolute lg:left-[92px]">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold border-l-8 border-white pl-4">
          My Custom Crud Apis Post Page
        </h1>
        <AddPost />
        <PostsList posts={data} />
      </div>
    </div>
  );
};

export default page;
