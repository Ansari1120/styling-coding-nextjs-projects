"use client";
import React, { useEffect, useRef, useState } from "react";
import PublicList from "../components/PublicPostList";
import axios from "axios";
import { PaginationBar } from "../components/paginationBar";
import { redirect } from "next/navigation";
import Loader from "@/lib/loader";
import { useSession } from "next-auth/react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

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
const Page = () => {
  const { data: session, status } = useSession(); // Use the useSession hook

  if (status === "unauthenticated") {
    return redirect("/login");
  }

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
    const fetchData = async () => {
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
    <div className="flex justify-center my-5 items-center flex-col gap-4 lg:mr-28 mr-10">
      <div className="absolute lg:bottom-[500px] bottom-[338px] lg:right-20 right-5 float-right ">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          type="button"
          onClick={() => {
            setDropDown((prev) => !prev);
          }}
        >
          Sort By
          {dropDown ? (
            <ChevronDown size={20} className="ml-2" />
          ) : (
            <ChevronUp size={20} className="ml-2" />
          )}
        </button>
        {dropDown && (
          <div
            ref={dropdownRef}
            id="dropdown"
            className="bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 absolute"
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
      </div>
      <div className="my-5 flex flex-col gap-4 ml-10 justify-between w-screen">
        <h1 className="lg:text-3xl text-2xl lg:font-bold font-semibold lg:border-l-8 border-l-4 border-black text-black lg:pl-4 pl-2 lg:ml-24 ml-2">
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

export default Page;
