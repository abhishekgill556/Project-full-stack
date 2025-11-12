import servicesData from "../../data/services.json";
import "./Service.css";

export default function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <ul className="services-list">
        {servicesData.map((s) => (
          <li key={s.id}>
            <strong>{s.name}</strong>
            <p className="service-desc">{s.description}</p>
            <div className="service-meta">
              {s.category} — ${s.price}, {s.duration} min
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
