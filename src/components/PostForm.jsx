import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title..."
      />
      {/* 
    ==============================================
    const descInputRef = useRef(); */}
      {/* Неуправляемый инпут(получения валуе) */}
      {/* <MyInput
      ref={descInputRef}
      type="text"
      placeholder="Post description..."
    /> 
    ==============================================
    */}

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description..."
      />
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  );
}
