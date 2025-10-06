import "../stylist/stylist.css";
import stylistData from "../../data/stylist.json";
import StylistFilterForm from "../stylist/StylistFilterForm";
import SavedFilters from "../stylist/SavedFilters";

type StylistsPageProps = {
  filterTerm: string;
  setFilterTerm: (v: string) => void;
  savedTerms: string[];
  addSavedTerm: (term: string) => void;
  removeSavedTerm: (term: string) => void;
};

export default function StylistsPage({
  filterTerm,
  setFilterTerm,
  savedTerms,
  addSavedTerm,
  removeSavedTerm,
}: StylistsPageProps) {
  const items = Object.entries(stylistData).flatMap(([serviceName, levels]) =>
    Object.entries(levels as Record<string, number>).map(([level, price]) => ({
      service: serviceName,
      level,
      price,
    }))
  );

  const filtered = items.filter(
    it =>
      it.level.toLowerCase().includes(filterTerm.toLowerCase()) ||
      it.service.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="stylist">
      <h2 className="stylist-title">Our Stylists</h2>
      <StylistFilterForm
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
        onSave={() => addSavedTerm(filterTerm)}
        onClear={() => setFilterTerm("")}
      />
      <div className="stylist-grid">
        {filtered.map(it => (
          <div key={`${it.service}:${it.level}`} className="stylist-card">
            <h3>{it.service}</h3>
            <p>
              <span className="level">{it.level}</span> — <span className="price">${it.price}</span>
            </p>
          </div>
        ))}
        {filtered.length === 0 && <p>No matches found.</p>}
      </div>
      <SavedFilters savedTerms={savedTerms} onSelect={setFilterTerm} onRemove={removeSavedTerm} />
    </div>
  );
}
