import React from "react";

export default function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.posts.title}
        </strong>
        <div>{props.posts.body}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
}
