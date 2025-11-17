import React, { useState } from "react";
import type { BlogPostInput } from "../../types/blogpost";

interface BlogFormProps {
  add: (newPost: BlogPostInput) => Promise<void> | void;
  submitting?: boolean;
}

export function BlogForm({ add, submitting }: BlogFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!title.trim() || !description.trim()) {
      setError("Title and description are required");
      return;
    }

    const newPost: BlogPostInput = {
      title,
      description,
    };

    try {
      await add(newPost);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to add post");
    }
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
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={submitting}>
        {submitting ? "Saving..." : "Add Blog Post"}
      </button>
    </form>
  );
}
