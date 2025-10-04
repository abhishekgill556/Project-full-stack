import "./Blog.css";
import type { BlogPost } from "../../types/blogpost";
import { BlogForm } from "../Pages/BlogForm";

interface BlogProps {
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

export function Blog({ posts, setPosts }: BlogProps) {
  const add = (newPost: BlogPost) => {
    setPosts([...posts, newPost]);
  };

  const remove = (id: number) => {
    setPosts(posts.filter((x) => x.id !== id));
  };

  return (
    <section className="blog">
      <h2>Our Blog</h2>

      <BlogForm add={add} />

      {posts.map((x) => (
        <article key={x.id} className="blog-post">
          <h3>{x.title}</h3>
          <p>{x.description}</p>
          <a href={x.link}>
            Read More
          </a>
          <button
            onClick={() => remove(x.id)}
          >
            Remove
          </button>
        </article>
      ))}
    </section>
  );
}
