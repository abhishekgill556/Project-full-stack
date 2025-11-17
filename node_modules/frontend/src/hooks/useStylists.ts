import { useEffect, useState } from "react";

export type Stylist = {
  id: number;
  name: string;
  expertise: string;
};

export function useStylists() {
  const [stylists, setStylists] = useState<Stylist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadStylists() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/stylists");
      const data = await res.json();
      setStylists(data);
    } catch (err) {
      setError("Failed to load stylists");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStylists();
  }, []);

  return { stylists, loading, error };
}
