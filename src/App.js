import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import "./styles/app.css";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript is a programming language!"
    },
    {
      id: 2,
      title: "JavaScript 2",
      body: "JavaScript is a programming language!"
    },
    {
      id: 3,
      title: "JavaScript 3",
      body: "JavaScript is a programming language!"
    }
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
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
      <PostList posts={posts} title="Table of Posts: JS" />
    </div>
  );
}
