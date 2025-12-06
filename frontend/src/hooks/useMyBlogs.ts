import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import type { BlogPost } from "../types/blogpost";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useMyBlogs() {
  const { getToken, isSignedIn } = useAuth();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadMyBlogs() {
      if (!isSignedIn) {
        setBlogs([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const token = await getToken();
        const res = await fetch(`${BASE_URL}/blogs/my`, {
          headers: {
            Authorization: `Bearer ${token ?? ""}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${await res.text()}`);
        }

        const json = await res.json();
        if (!cancelled) {
          setBlogs(json.data || []);
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message ?? "Failed to load your posts");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMyBlogs();

    return () => {
      cancelled = true;
    };
  }, [getToken, isSignedIn]);

  return { blogs, loading, error };
}
