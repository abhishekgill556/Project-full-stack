import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useMyBlogs } from "../../hooks/useMyBlogs";

export function MyBlogsPage() {
  const { blogs, loading, error } = useMyBlogs();

  return (
    <>
      <SignedIn>
        <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
          <h2>My Blog Posts</h2>
          {loading && <p>Loading your posts...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {!loading && !error && blogs.length === 0 && (
            <p>You haven't created any blog posts yet.</p>
          )}
          {!loading && !error && blogs.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    Read more →
                  </a>
                  <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>
                    Created: {new Date(blog.createdAt ?? "").toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/blog/my-posts" />
      </SignedOut>
    </>
  );
}
