import React, { useEffect, useState } from "react";
import * as pcApi from "../../utilities/pc-api";
import { Link } from "react-router-dom";
function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await pcApi.getPCPosts();
        console.log("Data received:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="HomePage">
      <div className="post-list">
        {posts.map((post) => (
          <Link to={`/posts/${post._id}`}>
            <div key={post._id} className="post">
              <img src={post.image} alt={post.name} />
              <h2>Name: {post.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
