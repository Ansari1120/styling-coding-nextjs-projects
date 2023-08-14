import React from "react";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import axios from "axios";
import BASE_URL from "@/lib/URL";

async function getPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/api/post`);
    return response.data;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array or handle the error case accordingly
  }
}

const page = async () => {
  const data = await getPosts();
  const session = await getServerSession(options);
  function containsAdmin(input: string): boolean {
    const targetWord = "admin";
    if (input !== undefined) {
      return input.includes(targetWord);
    } else {
      return false;
    }
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
        <AddPost session = {session} />
        <PostsList posts={data} session={session} />
      </div>
    </div>
  );
};

export default page;
