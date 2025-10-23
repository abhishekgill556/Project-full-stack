
import { useServices } from "../../hooks/useServices";

export default function ServicesPage() {
  const {
    items, query, setQuery, loading, error,
    name, setName,
    price, setPrice,
    duration, setDuration,
    category, setCategory,
    description, setDescription,
    addService, removeService
  } = useServices();

  return (
    <div>
      <h1>Our Services</h1>

      <input
        placeholder="Filter by name or description"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
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
        <button onClick={() => { void addService(); }}>Add service</button>
      </div>

      <div>Loaded: {items.length}</div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && items.length === 0 && <p>No services found.</p>}

      <ul>
        {items.map((s) => (
          <li key={s.id}>
            <div>{s.name}</div>
            <div>Category: {s.category}</div>
            <div>Price: ${s.price}</div>
            <div>Duration: {s.duration} min</div>
            {s.description && <div>{s.description}</div>}
            <button onClick={() => { void removeService(s.id); }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
