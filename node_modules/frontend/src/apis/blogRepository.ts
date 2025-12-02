import type { BlogPost, BlogPostInput } from "../types/blogpost";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getAllPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${BASE_URL}/blogs`);
  return (await res.json()).data;
}

export async function getPostById(id: number): Promise<BlogPost> {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  return (await res.json()).data;
}

export async function createPost(post: BlogPostInput): Promise<BlogPost> {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return (await res.json()).data;
}

export async function updatePost(post: BlogPost): Promise<BlogPost> {
  const res = await fetch(`${BASE_URL}/blogs/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return (await res.json()).data;
}

export async function deletePost(id: number) {
  await fetch(`${BASE_URL}/blogs/${id}`, { method: "DELETE" });
}
