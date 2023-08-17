"use client";
import React, { Fragment } from "react";
import PublicPostCard from "./PublicPostCard";

const PublicList = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
        {posts.map((data: any) => {
          return (
            <div key={data.id} className="lg:ml-24 lg:-mr-24 lg:w-[680px] ml-2 w-[280px] -mr-2">
              <PublicPostCard data={data} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PublicList;
