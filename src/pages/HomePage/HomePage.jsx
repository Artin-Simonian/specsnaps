import React, { useEffect, useState } from 'react';
import { getPCPosts } from '../../utilities/pc-api';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await getPCPosts();
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {

        }
      } catch (error) {
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
          <div key={post.id} className="post">
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
