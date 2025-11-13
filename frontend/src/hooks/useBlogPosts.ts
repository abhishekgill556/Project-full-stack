import { useState, useEffect } from "react";
import type { BlogPost } from "../types/blogpost";
import * as blogService from "../services/blogService";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await blogService.fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addPost = async (post: BlogPost) => {
    try {
      setLoading(true);
      await blogService.createNewPost(post);
      const data = await blogService.fetchPosts();
      setPosts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const removePost = async (id: number) => {
    try {
      setLoading(true);
      await blogService.deletePost(id);
      const data = await blogService.fetchPosts();
      setPosts(data);
    } catch (err) {
      setError("Failed to delete post");
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, addPost, removePost };
}
