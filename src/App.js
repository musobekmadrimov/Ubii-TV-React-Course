import React, { useMemo, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import "./styles/app.css";
import PostFilter from "./components/PostFilter";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body:
        "JavaScript is a programming language! JS is power!🔥 JS is future!💖"
    },
    {
      id: 2,
      title: "Python",
      body:
        "Programming PL Python is a number one programming language in the world now!"
    },
    {
      id: 3,
      title: "Java",
      body:
        "Running programming language on 3 billion devices around the world right now is Java!"
    }
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter.query) ||
        post.body.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter {...{ filter, setFilter }} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Table of Posts:"
      />
    </div>
  );
}
