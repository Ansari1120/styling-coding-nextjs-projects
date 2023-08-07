"use client";
import React, { Fragment } from "react";
import Post from "./post";
const PostsList = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
      <ol>
        {posts.map((data: any) => {
          return <Post post={data} />;
        })}
      </ol>
    </Fragment>
  );
};

export default PostsList;
