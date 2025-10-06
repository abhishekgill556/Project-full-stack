export type Service = {
  id: string;
  name: string;
  price: number;
  duration: number;
  description?: string;
};

type Props = {
  service: Service;
  onRemove?: (id: string) => void;     
  onSave?: (id: string) => void;         
  isSaved?: boolean;                    
};

export default function ServiceCard({ service, onRemove, onSave, isSaved }: Props) {
  return (
    <article className="service-card">
      <h3>{service.name}</h3>
      {service.description && <p className="service-desc">{service.description}</p>}
      <div className="service-meta">Price — ${service.price}, {service.duration} min</div>

      <div className="service-actions">
        {onSave && (
          <button className="btn" onClick={() => onSave(service.id)}>
            {isSaved ? "Saved ✓" : "Save"}
          </button>
        )}
        {onRemove && (
          <button className="btn btn-danger" onClick={() => onRemove(service.id)}>
            Remove
          </button>
        )}
      </div>
    </article>
  );
}
