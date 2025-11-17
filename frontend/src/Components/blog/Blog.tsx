import "./Blog.css";
import { BlogForm } from "../Pages/BlogForm";
import { useBlogPosts } from "../../hooks/useBlogPosts";

export function Blog() {
  const { posts, loading, error, addPost, removePost } = useBlogPosts();

  return (
    <section className="blog">
      <h2>Our Blog</h2>

      <BlogForm add={addPost} submitting={loading} />

      {loading && <p>Loading blog posts...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && posts.length === 0 && <p>No blog posts yet.</p>}

      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          {post.link && (
            <a href={post.link} target="_blank" rel="noreferrer">
              Read More
            </a>
          )}
          <button onClick={() => removePost(post.id)}>Remove</button>
        </article>
      ))}
    </section>
  );
}
