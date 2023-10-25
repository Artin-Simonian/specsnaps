import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as postsApi from '../../utilities/pc-api';

export default function PostDetailPage() {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

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
            <h1>Home</h1>
        </main>
    );
}
