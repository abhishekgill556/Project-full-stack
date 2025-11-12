import { useEffect, useState } from "react";
import type { Service, ServiceCategory } from "../types/service";
import { serviceService } from "../services/serviceLayer";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState<ServiceCategory>("Other");
  const [description, setDescription] = useState("");


  async function loadServices() {
    try {
      setLoading(true);
      setError(null);
      const list = await serviceService.list(search);
      setServices(list);
    } catch {
      setError("Could not load services.");
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    loadServices();
  }, []);


  useEffect(() => {
    const t = setTimeout(() => loadServices(), 200);
    return () => clearTimeout(t);
  }, [search]);

  
  async function addService() {
    const result = await serviceService.create({
      name,
      price: Number(price),
      duration: Number(duration),
      category,
      description,
    });

    if (!result.ok) {
      setError(result.errors.join(" "));
      return;
    }


    setServices((prev) => [...prev, result.value]);

    setName("");
    setPrice("");
    setDuration("");
    setCategory("Other");
    setDescription("");
    loadServices();
  }


  async function removeService(id: string) {
    await serviceService.remove(id);
    loadServices();
  }

  return {
    services,
    search,
    setSearch,
    loading,
    error,
    name,
    setName,
    price,
    setPrice,
    duration,
    setDuration,
    category,
    setCategory,
    description,
    setDescription,
    addService,
    removeService,
  };
}
