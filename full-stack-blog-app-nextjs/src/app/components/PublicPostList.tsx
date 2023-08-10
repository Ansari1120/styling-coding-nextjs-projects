"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dot } from "lucide-react";

const PublicList = (props: any) => {
  const { posts } = props;
  const regex = /(\d{2}:\d{2})/; // Regular expression to match HH:mm format

  return (
    <Fragment>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:mr-5">
        {posts.map((data: any) => {
          return (
            <a
              key={data.id}
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md lg:max-w-xl max-w-sm lg:mx-auto md:mx-20 mx-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {data.description}
                </p>

                <div className="flex pb-4 justify-between space-x-5">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-10 rounded-full"
                      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                      alt="sara"
                    />
                    <h2 className="text-gray-800 font-bold cursor-pointer line-clamp-1">
                      Felipe Sacudon
                    </h2>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex space-x-1 items-center">
                      <span>
                        <svg
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
                      </span>
                      <span>20</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-md font-semibold text-gray-900 dark:text-white">
                    {data.createdAt.split("T", 1)}
                  </span>
                  <span>
                    <Dot />
                  </span>
                  <span className="text-md font-semibold text-gray-900 dark:text-white"> {data.createdAt.match(regex)[1]}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PublicList;
