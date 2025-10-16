import { useEffect, useState } from "react";
import { serviceLayer } from "../services/serviceLayer";
import type { Service } from "../types/service";

export function useServices() {
  const [items, setItems] = useState<Service[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      const data = query ? await serviceLayer.search(query) : await serviceLayer.list();
      setItems(data);
      setError(null);
    } catch (e: any) {
      setError(e.message ?? "Failed to load services");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [query]);

  return { items, query, setQuery, loading, error, reload: load };
}
