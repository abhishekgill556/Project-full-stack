import { useAuth } from "@clerk/clerk-react";
import type { BlogPost, BlogPostInput } from "../types/blogpost";

export function useBlogPosts() {
  const { getToken } = useAuth();

  async function getAllPosts(): Promise<BlogPost[]> {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`);
    const json = await res.json();
    return json.data || [];
  }

  async function getMyPosts(): Promise<BlogPost[]> {
    const token = await getToken();
    
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const json = await res.json();
    return json.data || [];
  }

  async function addPost(data: BlogPostInput): Promise<BlogPost> {
    const token = await getToken();

    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return json.data;
  }

  async function deletePost(id: number): Promise<{ message: string }> {
    const token = await getToken();

    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/blogs/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.json();
  }

  return { getAllPosts, getMyPosts, addPost, deletePost };
}
