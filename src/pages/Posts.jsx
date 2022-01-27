import React, { useEffect, useState } from "react";
import ClassCounter from "../components/ClassCounter";
import Counter from "../components/Counter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import "../styles/app.css";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/Button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];

      setTotalPages(getPageCount(totalCount, limit));
      setIsPostsLoading(false);
    }, 1000);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="">
      <Counter />
      <hr style={{ margin: "15px 0" }} />
      <ClassCounter />
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <MyButton onClick={() => setVisible(true)}>New Post</MyButton>
      <PostFilter {...{ filter, setFilter }} />
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Table of Posts:"
        />
      )}

      <Pagination {...{ totalPages, page, changePage }} />
    </div>
  );
}
