import React, { useEffect, useState } from "react";
import { getPCPosts } from '../../utilities/pc-api';
import * as pcApi from '../../utilities/pc-api';
function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await pcApi.getPCPosts();
        console.log("Data received:", data);;
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="HomePage">
      <div>
        <h1>Home</h1>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post._id} className="post"> {/* Use post._id instead of post.id */}
            <img src={post.image} alt={post.name} />
            <h2>{post.name}</h2>
            <p>Processor: {post.processor}</p>
            <p>Video Card: {post.videoCard}</p>
            <p>RAM: {post.ram} GB</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
