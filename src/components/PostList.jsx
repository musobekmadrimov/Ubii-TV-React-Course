import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={index} timeout={500} classNames="post">
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
