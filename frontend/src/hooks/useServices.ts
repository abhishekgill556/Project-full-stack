import { useEffect, useState } from "react";
import type { Service } from "../types/service";
import { serviceService } from "../services/serviceLayer";

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("Cuts");
  const [description, setDescription] = useState("");

  async function loadServices() {
    try {
      setLoading(true);
      setError(null);

      console.log("Fetching services from backend...");
      const list = await serviceService.list();
      console.log("Loaded services:", list);

      setServices(list);

    } catch (err) {
      console.error("LOAD SERVICES ERROR →", err);
      setError("Could not load services.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadServices();
  }, []);

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
    setCategory("Cuts");
    setDescription("");
    loadServices();
  }

  async function removeService(id: number | string) {
    await serviceService.remove(Number(id));
    loadServices();
  }

  return {
    services,
    loading,
    error,

    name, setName,
    price, setPrice,
    duration, setDuration,
    category, setCategory,
    description, setDescription,

    addService,
    removeService,
  };
}
