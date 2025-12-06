import "./Blog.css";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

import { useBlogPosts } from "../../hooks/useBlogPosts";
import type { BlogPost } from "../../types/blogpost";

export function Blog() {
  const { isSignedIn } = useUser();
  const { getAllPosts, addPost, deletePost } = useBlogPosts();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  async function handleAdd() {
    try {
      setError(null);
      const newPost = {
        title: "New Blog Post",
        description: "This is a new blog post description",
        link: "https://example.com",
      };

      const created = await addPost(newPost);
      setPosts([...posts, created]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add post");
      console.error("Add post error:", err);
    }
  }

  async function handleDelete(id: number) {
    try {
      setError(null);
      await deletePost(id);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post");
      console.error("Delete post error:", err);
    }
  }

  return (
    <section className="blog">
      <h2>Our Blog</h2>

      {isSignedIn ? (
        <button onClick={handleAdd}>Add Blog Post</button>
      ) : (
        <p>You must sign in to add or remove blog posts.</p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <article className="blog-post">
              <p>
                <strong>{post.title}</strong>
              </p>
              <p>{post.description}</p>
              {post.link && (
                <a href={post.link} target="_blank" rel="noreferrer">
                  Read More
                </a>
              )}

              {isSignedIn && (
                <button onClick={() => handleDelete(post.id)}>Remove</button>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
