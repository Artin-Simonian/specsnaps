import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as postsApi from "../../utilities/pc-api";
import "./PostDetailPage.css";
export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [reviewData, setReviewData] = useState({ content: "" });
  useEffect(() => {
    async function fetchPost() {
      try {
        const postDetail = await postsApi.getById(postId);
        console.log(postDetail);
        setPost(postDetail);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  }, [postId]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewDetail = await postsApi.getReviewsForPost(postId);
        setReviewData(reviewDetail);
      } catch (error) {
        console.error("Error fetching Review:", error);
      }
    }

    fetchReviews();
  }, [postId]);

  function handleCreateReview() {
    postsApi.createReview(reviewData, postId);
  }

  return (
    <main className="detailsPage">
      {post && (
        <div className="PcPost">
          <img src={post.image} />
          <h1>{post.name}</h1>
          <p>Processor: {post.processor}</p>
          <p>Video Card: {post.videoCard}</p>
          <p>Ram: {post.ram}GB</p>
        </div>
      )}
      <div className="reviewsSection">
        <h3>Comments</h3>
        <form onSubmit={handleCreateReview}>
          <label htmlFor="">Leave a Review</label>
          <br />
          <textarea
            onChange={(e) => setReviewData({ content: e.target.value })}
            value={reviewData.content}
            cols="20"
            rows="2"
            placeholder="Leave a Review"
          ></textarea>
          <br />
          <input type="submit" value="Add Review"></input>
        </form>
      </div>
      <div>
        <p>{reviewData.content}</p>
      </div>
    </main>
  );
}
