import React, { cache } from "react";
import PublicList from "../components/PublicPostList";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import axios from "axios";
import BASE_URL from "@/lib/URL";
import PaginationBar from "../components/paginationBar";
async function getPosts(number?: any) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  try {
    const response = await axios.get(
      `${BASE_URL}/api/post/pagination/${number || 1}?order=desc`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array or handle the error case accordingly
  }
}
const page = async () => {
  const data = await getPosts();
  // const pageNumber = localStorage.getItem("pageNumber");

  // console.log("Page number", pageNumber);
  return (
    <div className="mt-10">
      <div className="my-5 flex flex-col gap-4 lg:ml-40 ml-5  ">
        <h1 className="text-3xl font-bold border-l-8 border-white text-gray-100 pl-4">
          Our Blogs{" "}
        </h1>
        <PublicList posts={data} />
        <PaginationBar posts={data} />
      </div>
    </div>
  );
};

export default page;
function handleChildData() {
  throw new Error("Function not implemented.");
}
