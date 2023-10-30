import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as postsApi from "../../utilities/pc-api";
import "./PostDetailPage.css";

export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
  const { postId } = useParams();

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

  async function handleCreateReview() {
    try {
      // IMPORTANT: In the controller, res.json the updated post
      const updatedPost = await postsApi.createReview(postId, reviewContent);
      setPost(updatedPost);
    } catch (error) {
      console.error("Error:", error);
    }
    setReviewContent("");
  }

  async function handleDeleteReview(reviewId) {
    try {
      const updatedPost = await postsApi.deleteReview(postId, reviewId);
      setPost(updatedPost);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  if (!post) return null;
  const reversedReviews = post.reviews.slice().reverse();
  return (
    <>
    <main className="detailsPage">
      {post && (
        <div className="PcPost">
          <img src={post.image} alt={post.name} />
          <h1>{post.name}</h1>
          <p>Processor: {post.processor}</p>
          <p>Video Card: {post.videoCard}</p>
          <p>Ram: {post.ram}GB</p>
        </div>
      )}
      <div className="reviewsSection">
        <form onSubmit={handleCreateReview}>
          <label htmlFor="review">Leave a Review or a Comment <br />for {post.name}</label>
          <br />
          <textarea
            onChange={(e) => setReviewContent(e.target.value)}
            value={reviewContent}
            cols="20"
            rows="2"
          ></textarea>
          <br />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    </main>
    <div className="overflow-auto" id="all-reviews">
      <div>
        <h1>Reviews</h1>
      </div>
      <hr />
      {post.reviews.slice().reverse().map((review, index) => (
        <div key={index}>
          <p>{review.user} | {review.content}</p>
          <button
              onClick={() => handleDeleteReview(review._id)}
              className="delete-button"
            >
              ❌
            </button>
          <hr />
        </div>
      ))}
    </div>
  </>
    
  );
}
