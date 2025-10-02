import { type ChangeEvent, type FormEvent } from "react";
import type { Service } from "./ServiceCard";

export type Draft = {
  name: string;
  price: string;
  duration: string;
  description: string;
};

type Props = {
  className?: string;
  query: string;
  setQuery: (v: string) => void;

  draft: Draft;
  setDraft: (d: Draft) => void;

  onAdd: (s: Omit<Service, "id">) => void;
  errors: string[];
  setErrors: (errs: string[]) => void; 
};

export default function ServiceForm({
  className,
  query,
  setQuery,
  draft,
  setDraft,
  onAdd,
  errors,
  setErrors,
}: Props) {
  const onChangeDraft = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDraft({ ...draft, [name]: value });
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const price = Number(draft.price);
    const duration = Number(draft.duration);

    const errs: string[] = [];
    if (!draft.name.trim()) errs.push("Name is required.");
    if (!Number.isFinite(price) || price <= 0) errs.push("Price must be > 0.");
    if (!Number.isFinite(duration) || duration <= 0) errs.push("Duration must be > 0.");

    if (errs.length) {
      setErrors(errs);     
      return;
    }

    setErrors([]);          
    onAdd({
      name: draft.name.trim(),
      price,
      duration,
      description: draft.description.trim() || undefined,
    });

    setDraft({ name: "", price: "", duration: "", description: "" });
  };

  return (
    <form onSubmit={submit} className={className}>
      <div className="form-row">
        <label htmlFor="query">Search services</label>
        <input
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name or description"
        />
      </div>

      <div>
        <label>
          Name
          <input
            name="name"
            value={draft.name}
            onChange={onChangeDraft}
            placeholder="Service name"
            required
          />
        </label>

        <label>
          Price (CAD)
          <input
            name="price"
            type="number"     
            min={1}
            step="1"
            value={draft.price}
            onChange={onChangeDraft}
            placeholder="e.g. 55"
            required
          />
        </label>

        <label>
          Duration (min)
          <input
            name="duration"
            type="number"      
            min={1}
            step="1"
            value={draft.duration}
            onChange={onChangeDraft}
            placeholder="e.g. 45"
            required
          />
        </label>

        <label>
          Description (optional)
          <textarea
            name="description"
            rows={2}
            value={draft.description}
            onChange={onChangeDraft}
            placeholder="Short description"
          />
        </label>
      </div>

      {errors.length > 0 && (
        <ul className="form-errors">
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}

      <div className="form-actions">
        <button type="submit" className="btn">Add service</button>
      </div>
    </form>
  );
}
