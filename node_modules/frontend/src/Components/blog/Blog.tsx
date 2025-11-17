import "./Blog.css";
import { BlogForm } from "../Pages/BlogForm";
import type { BlogPost } from "../../types/blogpost";

interface BlogProps {
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

export function Blog({ posts, setPosts }: BlogProps) {

  const addPost = (newPost: BlogPost) => {
    setPosts(prev => [...prev, newPost]);
  };

  const removePost = (id: number | string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <section className="blog">
      <h2>Our Blog</h2>

      <BlogForm add={addPost} />

      {posts.length === 0 && <p>No blog posts yet.</p>}

      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          {post.link && <a href={post.link}>Read More</a>}
          <button onClick={() => removePost(post.id)}>Remove</button>
        </article>
      ))}
    </section>
  );
}
