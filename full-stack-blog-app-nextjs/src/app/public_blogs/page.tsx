"use client";
import React, { useEffect, useRef, useState } from "react";
import PublicList from "../components/PublicPostList";
import { options } from "../api/auth/[...nextauth]/options";
import axios from "axios";
import BASE_URL from "@/lib/URL";
import { PaginationBar } from "../components/paginationBar";
import { redirect } from "next/navigation";
import Loader from "@/lib/loader";
import { getSession } from "next-auth/react";

async function getPosts(page?: number, order?: string) {
  try {
    const response = await axios.get(
      `/api/post/pagination/${page}?order=${order}`
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return { data: [] }; // Return an object with a 'data' property
  }
}
interface Mytypes {
  data: [];
  totalPages: any;
  page: any;
}
const Page = ({ session }) => {
  console.log(session);
  // const { data: session, status } = useSession();

  // console.log(status);
  // if (status !== "authenticated") {
  //   redirect("/login");
  // }
  const [posts, setPosts] = useState<Mytypes>({
    data: [],
    totalPages: null,
    page: null,
  }); // Initialize with an empty data array
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentOrder, setCurrentOrder] = useState<string>("asc");
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef: any = useRef(null); // Reference to the dropdown element

  const handleSort = async (data: string) => {
    setCurrentOrder(data);
    const updatedData = await getPosts(currentPage, data); // Call getPosts and await the response
    setPosts(updatedData);
  };

  const handleDataReceived = async (data: number) => {
    setCurrentPage(data);
    const updatedData = await getPosts(data, currentOrder); // Call getPosts and await the response
    setPosts(updatedData);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      console.log("Inside fetchData");
      const data = await getPosts(currentPage, currentOrder);
      console.log("Fetched Data:", data);
      setPosts(data);
    };

    fetchData();

    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-10">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right right-32"
        type="button"
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        Sort By
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {dropDown && (
        <div
          ref={dropdownRef}
          id="dropdown"
          className="bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 absolute mt-12 right-48"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button
                onClick={() => handleSort("asc")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                A-To-Z
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSort("desc")}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Z-To-A
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="my-5 flex flex-col gap-4 lg:ml-40 ml-5">
        <h1 className="text-3xl font-bold border-l-8 border-white text-gray-100 pl-4">
          Our Blogs
        </h1>

        {posts.data.length > 0 ? <PublicList posts={posts.data} /> : <Loader />}
        <PaginationBar
          posts={posts.totalPages}
          page={posts.page}
          pageNumb={handleDataReceived}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Page;
