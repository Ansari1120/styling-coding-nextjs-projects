"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dot } from "lucide-react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
const PublicPostCard = (props: any) => {
  const { data } = props;
  const router = useRouter();
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
  const hasLiked = () => {
    if (typeof window !== "undefined") {
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      return likedPosts.includes(data.id);
    }
    return false;
  };
  const [liked, setLiked] = useState(hasLiked());
  const handleBlogLikes = (e: any) => {
    const updatedData = { ...data };
    const newLikedState = !liked; // Toggle liked state
    e.preventDefault();
    if (newLikedState && updatedData.blogLikes >= 1) {
      updatedData.blogLikes -= 1;
    } else {
      updatedData.blogLikes += 1;
    }
    setLiked((prev: any) => !prev);
    setLiked(newLikedState); // Update liked state

    try {
      axios
        .patch(`http://localhost:3000/api/post/${data.id}`, updatedData)
        .then((res) => {
          console.log(res);
          //   toast.success("Blog Edited Successfully", { id: data?.user?.id });
          router.refresh();
          const likedPosts = JSON.parse(
            localStorage.getItem("likedPosts") || "[]"
          );
          if (newLikedState) {
            likedPosts.push(data.id);
          } else {
            const index = likedPosts.indexOf(data.id);
            if (index !== -1) {
              likedPosts.splice(index, 1);
            }
          }
          localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("check returned data overwrite or not? ", data.blogLikes);
  }, [data]);
  return (
    <a
      key={data.id}
      href="#"
      className="flex flex-col items-center  bg-slate-400 bg-opacity-75 border border-slate-500 rounded-lg shadow md:flex-row hover:bg-slate-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        className="object-none h-96 w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={data.imageSrc}
        alt="blog image"
        width={200}
        height={100}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {data.title}
        </h5>
        <p className="mb-3 font-semibold italic text-gray-800 dark:text-gray-400 line-clamp-3">
          {data.description}
        </p>

        <div className="flex pb-4 justify-between space-x-5">
          <div className="flex items-center space-x-2">
            <Image
              className="w-10 rounded-full"
              src={
                data.authorImg
                  ? data.authorImg
                  : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              }
              alt="authorimg"
              width={20}
              height={20}
            />
            <h2 className="text-gray-800 font-bold cursor-pointer line-clamp-1">
              {data.authorName ? data.authorName : "anonymous"}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center">
              <span>
                {!liked ? (
                  <svg
                    onClick={handleBlogLikes}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <Heart onClick={handleBlogLikes} />
                )}
              </span>
              <span>{data.blogLikes !== null ? data.blogLikes : 0}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1 items-center justify-center">
          <span className="text-md font-semibold text-gray-900 dark:text-white">
            {new Date(data.createdAt).toLocaleString("en-US", dateOptions)}
          </span>
          <span>
            <Dot />
          </span>
          <span className="text-md font-semibold text-gray-900 dark:text-white">
            {new Date(data.createdAt).toLocaleString("en-US", timeOptions)}
          </span>
        </div>
      </div>
    </a>
  );
};

export default PublicPostCard;
