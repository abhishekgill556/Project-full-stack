import { useEffect, useState } from "react";
import type { Service, ServiceCategory } from "../types/service";
import { serviceService } from "../services/serviceLayer";

const norm = (s: string) => s.trim().toLowerCase();
const matchesQuery = (s: Service, q: string) => {
  if (!q) return true;
  const x = norm(q);
  return (
    norm(s.name).includes(x) ||
    norm(s.category).includes(x) ||
    (s.description && norm(s.description).includes(x))
  );
};

export function useServices() {
  const [items, setItems] = useState<Service[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [category, setCategory] = useState<ServiceCategory>("Other");
  const [description, setDescription] = useState("");

  async function refresh(q: string) {
    try {
      setLoading(true);
      setError(null);
      const data = await serviceService.list(q);
      setItems(data);
    } catch {
      setError("Failed to load services.");
    } finally {
      setLoading(false);
    }
  }

  // load once
  useEffect(() => {
    void refresh(query.trim());
  }, []);

  // re-filter on query changes (simple debounce not required, but easy to add later)
  useEffect(() => {
    const t = setTimeout(() => void refresh(query.trim()), 200);
    return () => clearTimeout(t);
  }, [query]);

  async function addService() {
    setError(null);
    const result = await serviceService.create({
      name,
      price: Number(price),
      duration: Number(duration),
      category,
      description
    });

    if (!("ok" in result) || !result.ok) {
      setError(result.errors.join(" "));
      return;
    }

    const newItem = result.value;

    // ✅ Optimistic insert so it shows immediately if it matches current search
    if (matchesQuery(newItem, query)) {
      setItems(prev => [...prev, newItem]);
    }

    // clear form
    setName("");
    setPrice("");
    setDuration("");
    setCategory("Other");
    setDescription("");

    // keep in sync with repo and re-apply filter
    await refresh(query.trim());
  }

  async function removeService(id: string) {
    setError(null);
    await serviceService.remove(id);
    await refresh(query.trim());
  }

  return {
    items, query, setQuery, loading, error,
    name, setName, price, setPrice, duration, setDuration, category, setCategory, description, setDescription,
    addService, removeService
  };
}
