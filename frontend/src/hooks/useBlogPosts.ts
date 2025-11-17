import { useEffect, useRef, useState, useCallback } from "react";
import type { BlogPost, BlogPostInput } from "../types/blogpost";
import * as blogService from "../services/blogService";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await blogService.fetchPosts();
        if (!mountedRef.current || controller.signal.aborted) return;
        setPosts(data);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to load blog posts";
        if (!mountedRef.current || controller.signal.aborted) return;
        setError(msg);
      } finally {
        if (!mountedRef.current || controller.signal.aborted) return;
        setLoading(false);
      }
    };

    void load();

    return () => {
      mountedRef.current = false;
      controller.abort();
    };
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await blogService.fetchPosts();
      if (!mountedRef.current) return;
      setPosts(data);
    } catch (err) {
      if (!mountedRef.current) return;
      setError(err instanceof Error ? err.message : "Failed to load blog posts");
    } finally {
      if (!mountedRef.current) return;
      setLoading(false);
    }
  }, []);

  const addPost = useCallback(async (post: BlogPostInput) => {
    try {
      setLoading(true);
      setError(null);
      const created = await blogService.createNewPost(post);
      if (!mountedRef.current) return;
      // Optimistically append; if you prefer, call refresh() instead
      setPosts((prev) => [created, ...prev]);
    } catch (err) {
      if (!mountedRef.current) return;
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      if (!mountedRef.current) return;
      setLoading(false);
    }
  }, []);

  const updatePost = useCallback(async (post: BlogPost) => {
    try {
      setLoading(true);
      setError(null);
      const updated = await blogService.updatePost(post);
      if (!mountedRef.current) return;
      setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    } catch (err) {
      if (!mountedRef.current) return;
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      if (!mountedRef.current) return;
      setLoading(false);
    }
  }, []);

  const removePost = useCallback(async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      await blogService.deletePost(id);
      if (!mountedRef.current) return;
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      if (!mountedRef.current) return;
      setError(err instanceof Error ? err.message : "Failed to delete post");
    } finally {
      if (!mountedRef.current) return;
      setLoading(false);
    }
  }, []);

  return { posts, loading, error, addPost, updatePost, removePost, refresh };
}
