"use client";
import React, { Fragment } from "react";
import Post from "./post";
const PostsList = (props: any) => {
  const { posts,session } = props;
  return (
    <Fragment>
      <ol>
        {posts.map((data: any) => {
          return <Post post={data} session={session} />;
        })}
      </ol>
    </Fragment>
  );
};

export default PostsList;
