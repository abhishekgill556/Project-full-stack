import "./Blog.css";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

import { useBlogPosts } from "../../hooks/useBlogPosts";
import type { BlogPost } from "../../types/blogpost";

export function Blog() {
  const { isSignedIn } = useUser();
  const { getAllPosts, addPost, deletePost } = useBlogPosts();

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  async function handleAdd() {
    const newPost = {
      title: "New Blog Post",
      description: "This is a new blog post description",
    };

    const created = await addPost(newPost);
    setPosts([...posts, created]);
  }

  async function handleDelete(id: number) {
    await deletePost(id);
    setPosts(posts.filter((p) => p.id !== id));
  }

  return (
    <section className="blog">
      <h2>Our Blog</h2>

      {isSignedIn ? (
        <button onClick={handleAdd}>Add Blog Post</button>
      ) : (
        <p>You must sign in to add or remove blog posts.</p>
      )}

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
