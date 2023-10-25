import React, { useEffect, useState } from "react";
import * as pcApi from '../../utilities/pc-api';
function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await pcApi.getPCPosts();
        console.log("Data received:", data);;
        setPosts(data);
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
          <div key={post._id} className="post"> 
            <a href=""><img src={post.image} /></a>
            <a href=""><h2>Name: {post.name}</h2></a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
