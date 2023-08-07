"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
const PublicList = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
      <ol>
        {posts.map((data: any) => {
          return (
            <Link key={data.id} href={"#"}>
              <div className="my-5 bg-slate-300 bg-opacity-50 rounded-lg border-2 p-4">
                <div className="flex gap-2 justify-between items-center">
                  {data.imageSrc !== null ? (
                    <Image
                      className="rounded-md"
                      src={data.imageSrc}
                      width={400}
                      height={400}
                      alt="Image"
                    />
                  ) : (
                    <p>No image available</p>
                  )}

                  <div className="w-[530px] flex flex-col gap-4 leading-[1.5]">
                    <h1 className="text-2xl font-semibold">{data.title}</h1>

                    <p className="text-xl pt-2">{data.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </ol>
    </Fragment>
  );
};

export default PublicList;
