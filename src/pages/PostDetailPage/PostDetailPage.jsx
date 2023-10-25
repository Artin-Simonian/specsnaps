import { useState, useEffect } from "react";
import {  Link, useParams} from 'react-router-dom';
import * as postsApi from "../../utilities/pc-api";

export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  console.log(postId);
  useEffect(() => {
    async function fetchPost() {
      try {
        const post = await postsApi.getById(postId);
        setPost(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  }, []);

  return (
    <main>
      <div className="PcPost">
        <img src={post.image} alt={post.name} />
        <h1>{post.name}</h1>
        <p>{post.processor}</p>
        <p>{post.videoCard}</p>
        <p>{post.ram}</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="reviewsSection">
        <h3>Comments</h3>
      </div>
    </main>
  );
}
