import { useEffect, useState } from "react";

export type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadServices() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/services");
      const data = await res.json();
      setServices(data);
    } catch (err) {
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadServices();
  }, []);

  return { services, loading, error };
}
