import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <div className="noPost"> No Post is found... </div>;
  }
  return (
    <div>
      <h1
        style={{
          textAlign: "center"
        }}
      >
        {title}
      </h1>
      {posts.map((post, index) => {
        return (
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={index}
          />
        );
      })}
    </div>
  );
}
