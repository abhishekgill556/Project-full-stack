import { useServices } from "../../hooks/useServices";

export default function ServicesPage() {
  const { items, query, setQuery, loading, error } = useServices();

  return (
    <div>
      <h1>Our Services</h1>

      <input
        placeholder="Search services"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items.map((s) => (
          <li key={s.id}>
            <div>{s.name}</div>
            <div>Category: {s.category}</div>
            <div>Price: ${s.price}</div>
            <div>Duration: {s.duration} min</div>
            {s.description && <div>{s.description}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
