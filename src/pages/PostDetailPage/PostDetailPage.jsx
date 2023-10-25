import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as postsApi from "../../utilities/pc-api";
import "./PostDetailPage.css";
export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  console.log(postId);
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

  return (
    <main className="detailsPage">
      {post && (
        <div className="PcPost">
          <img src={post.image} />
          <h1>{post.name}</h1>
          <p>Processor: {post.processor}</p>
          <p>Video Card: {post.videoCard}</p>
          <p>Ram: {post.ram}</p>
        </div>
      )}
      <div className="reviewsSection">
        <h3>Comments</h3>
        <form>
          <label htmlFor="">Leave a Review</label>
          <br />
          <textarea cols="20" rows="2" placeholder="Leave a Review"></textarea>
          <br />
          <input type="submit" value="Add Review"></input>
        </form>
      </div>
    </main>
  );
}
