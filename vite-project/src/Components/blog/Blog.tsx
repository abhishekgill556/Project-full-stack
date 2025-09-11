import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <h2>Our Blog</h2>
      <article className="blog-post"
      >
        <div className="blog-content">
      <h3>Top 5 Hair Care Tips</h3>
      <p>
        Healthy hair starts with the right care routine. Learn how to maintain
        strong, shiny, and beautiful hair with these expert tips.
      </p>
      <a href="#">Read More</a>
    </div>
      </article>

      <article className="blog-post"
      >
        <h3>Why Extensions are Trending</h3>
        <p>
          Hair extensions are becoming more popular than ever. Discover why
          they’re a must-have for modern styles.
        </p>
        <a href="#">Read More</a>
      </article>

      <article className="blog-post"      >
        <h3>Wedding Hairstyles 2025</h3>
        <p>
          From elegant buns to glamorous curls, explore the top wedding
          hairstyles that will make your big day unforgettable.
        </p>
        <a href="#">Read More</a>
      </article>
    </section>
  );
}
