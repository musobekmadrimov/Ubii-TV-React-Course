import React from "react";
import { useHistory } from "react-router-dom";
import MyButton from "./UI/Button/MyButton";

export default function PostItem({ remove, ...props }) {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => remove(props.post)} danger>
          Delete
        </MyButton>
      </div>
    </div>
  );
}
