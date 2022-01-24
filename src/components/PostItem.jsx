import React from "react";
import MyButton from "./UI/Button/MyButton";

export default function PostItem({ remove, ...props }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(props.post)} danger>
          Delete
        </MyButton>
      </div>
    </div>
  );
}
