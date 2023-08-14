"use client";
import React, { Fragment } from "react";
import PublicPostCard from "./PublicPostCard";

const PublicList = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 ">
        {posts.map((data: any) => {
          return <PublicPostCard data={data} />;
        })}
      </div>
    </Fragment>
  );
};

export default PublicList;
