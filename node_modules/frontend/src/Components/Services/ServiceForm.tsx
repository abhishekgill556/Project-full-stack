
import type { ServiceCategory } from "../../types/service";

type Props = {
  name: string;
  setName: (v: string) => void;
  price: string;
  setPrice: (v: string) => void;
  duration: string;
  setDuration: (v: string) => void;
  category: ServiceCategory;
  setCategory: (v: ServiceCategory) => void;
  description: string;
  setDescription: (v: string) => void;
  onSubmit: () => void;
};

export default function ServiceForm(props: Props) {
  const {
    name, setName,
    price, setPrice,
    duration, setDuration,
    category, setCategory,
    description, setDescription,
    onSubmit
  } = props;

  return (
    <div>
      <input placeholder="Service name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="e.g. 55" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="e.g. 45" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value as ServiceCategory)}>
        <option value="Cuts">Cuts</option>
        <option value="Color">Color</option>
        <option value="Hair Extensions">Hair Extensions</option>
        <option value="Other">Other</option>
      </select>
      <textarea placeholder="Short description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={onSubmit}>Add service</button>
    </div>
  );
}
