import { useMemo, useState } from "react";
import data from "../../data/services.json";                  
import ServiceCard, { type Service } from "../Services/ServiceCard";
import ServiceForm, { type Draft } from "../Services/ServiceForm";
import "../Services/Service.css";                              

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

export default function ServicesPage() {

  const initial: Service[] = useMemo(() => {
    const d = data as unknown;
    return Array.isArray(d) ? (d as Service[]) : [];
  }, []);

  const [services, setServices] = useState<Service[]>(initial);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<Draft>({
    name: "",
    price: "",
    duration: "",
    description: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const makeId = () =>
    globalThis.crypto?.randomUUID?.() ??
    `svc-${Date.now()}-${Math.random().toString(36).slice(2)}`;


  const removeService = (id: string) =>
    setServices((prev) => prev.filter((s) => s.id !== id));


  const addService = (s: Omit<Service, "id">) => {
    const errs: string[] = [];
    if (!s.name.trim()) errs.push("Name is required.");
    if (!(s.price > 0)) errs.push("Price must be > 0.");
    if (!(s.duration > 0)) errs.push("Duration must be > 0.");
    if (errs.length) return setErrors(errs);

    setErrors([]);
    setServices((prev) => [...prev, { id: makeId(), ...s }]);
  };


  const q = norm(query.trim());
  const shown = services.filter((s) =>
    norm(`${s.name} ${s.description ?? ""}`).includes(q)
  );

  return (
    <main className="services-section">
      <h2>Our Services</h2>

      <ServiceForm
        className="service-form"
        query={query}
        setQuery={setQuery}
        draft={draft}
        setDraft={setDraft}
        onAdd={addService}
        errors={errors}
        setErrors ={setErrors}
      />

      <div className="services-toolbar">
        <small>Loaded: {services.length}</small>
        {query && (
          <button className="btn" onClick={() => setQuery("")}>
            Clear search
          </button>
        )}
      </div>

      <ul className="services-list">
        {shown.map((service) => (
          <li key={service.id}>
            <ServiceCard service={service} onRemove={removeService} />
          </li>
        ))}
      </ul>

      {shown.length === 0 && <p className="service-empty">No services found.</p>}
    </main>
  );
}
