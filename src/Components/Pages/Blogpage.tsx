import type { BlogPost } from "../../types/blogpost";
import { Link } from "react-router-dom";

interface MyBlogsProps {
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

export function MyBlogs({ posts, setPosts }: MyBlogsProps) {
  const handleRemove = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

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
      {posts.map((x) => (
        <div key={x.id} className="blog-post mb-4">
          <h3>{x.title}</h3>
          <p>{x.description}</p>
          <button
            onClick={() => handleRemove(x.id)}
            className="text-red-500 underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
