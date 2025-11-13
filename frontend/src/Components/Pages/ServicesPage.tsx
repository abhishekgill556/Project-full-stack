import type { Service } from "../../types/service";
import { useServices } from "../../hooks/useServices";
import "../Services/Service.css";

export default function ServicesPage() {
  const {
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
  } = useServices();

  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <div className="form-controls">
        <input
          placeholder="Filter by name or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          placeholder="Service name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="e.g. 55"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="e.g. 45"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as any)}
        >
          <option value="Cuts">Cuts</option>
          <option value="Color">Color</option>
          <option value="Hair Extensions">Hair Extensions</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="add-btn" onClick={addService}>
          Add Service
        </button>
      </div>

      <p className="count">Loaded: {services.length}</p>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && services.length === 0 && <p>No services found.</p>}

      <ul className="services-list">
        {services.map((s: Service) => (
          <li key={s.id} className="service-card">
            <strong>{s.name}</strong>
            {s.description && <p className="service-desc">{s.description}</p>}
            <span>Category: {s.category}</span><br />
            <span>Price: ${s.price}</span><br />
            <span>Duration: {s.duration} min</span>
            <button className="remove-btn" onClick={() => removeService(s.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
