import "./Blog.css";
import { blogPosts } from "./data/blogData";

export default function Blog() {
  return (
    <section className="blog">
      <h2>Our Blog</h2>
      {blogPosts.map((x) => (
        <article key={x.id} className="blog-post">
          <h3>{x.title}</h3>
          <p>{x.description}</p>
          <a href={x.link}>Read More</a>
        </article>
      ))}
    </section>
  );
}
