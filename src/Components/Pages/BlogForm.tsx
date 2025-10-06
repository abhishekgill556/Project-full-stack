import { useState } from "react";
import type { BlogPost } from "../../types/blogpost";

interface BlogFormProps {
  add: (newPost: BlogPost) => void;
}

export function BlogForm({ add }: BlogFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newPost: BlogPost = {
      id: Date.now(),
      title,
      description,
      link: "#",
    };

    add(newPost);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter blog description"
      />
      <button type="submit">
        Add Blog Post
      </button>
    </form>
  );
}
