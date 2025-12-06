import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import { useBlogPosts } from "../../hooks/useBlogPosts";
import type { BlogPost } from "../../types/blogpost";

export function MyBlogs() {
  const { isSignedIn } = useUser();
  const { getMyPosts, deletePost } = useBlogPosts();

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getMyPosts().then(setPosts);
  }, []);

  async function handleDelete(id: number) {
    await deletePost(id);
    setPosts(posts.filter((p) => p.id !== id));
  }

  if (posts.length === 0) {
    return (
      <div className="p-8 text-lg">
        <p>No blog posts available.</p>
        <Link to="/blog" className="text-sky-600 hover:underline">
          Go to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">My Blog Posts</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="blog-post mb-4">
            <p>
              <strong>{post.title}</strong>
            </p>
            <p>{post.description}</p>

            {isSignedIn && (
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 underline"
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
