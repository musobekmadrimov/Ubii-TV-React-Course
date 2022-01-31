import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "./UI/Loader/Loader";

export default function PostComments() {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchPostComments();
  }, []);

  async function fetchPostComments() {
    setIsPostsLoading(true);
    const response = await PostService.getPost(params.id);
    const commentsResponse = await PostService.getComments(params.id);
    const photosResponse = await PostService.getPhotos(params.id);
    setPost(response.data);
    setComments(commentsResponse.data);
    setPhotos(photosResponse);
    setIsPostsLoading(false);
  }

  return (
    <>
      {isPostsLoading ? (
        <Loader />
      ) : (
        <div className="postCommentPageContainer">
          <h1 className="post_title">{`${post.id}. ${post.title}`}</h1>
          <p className="post_body">{post.body}</p>
          <img src={photos.contentUrl} alt="postphoto" className="postPhoto" />
          <div className="comments">
            <h3>Comments to this post:</h3>
            {comments.map((comment, index) => {
              return (
                <div key={index} className="eachComment">
                  <p className="comment_email">{comment.email}</p>
                  <p className="comment_body">{comment.body}</p>
                  <hr style={{ margin: "15px 0 0 0" }} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
