import "../stylist/stylist.css";
import StylistFilterForm from "../stylist/StylistFilterForm";
import SavedFilters from "../stylist/SavedFilters";
import { useStylists } from "../../hooks/useStylists";
import type { StylistData } from "../../types/stylist";

export default function StylistsPage() {
  const {
    data,  
    filterTerm,
    setFilterTerm,
    savedTerms,
    addSavedTerm,
    removeSavedTerm
  } = useStylists();

  const items = Object.entries(data as StylistData).flatMap(([serviceName, levels]) =>
    Object.entries(levels).map(([level, price]) => ({
      service: serviceName,
      level,
      price,
    }))
  );

  const filteredItems = items.filter(
    (it) =>
      it.service.toLowerCase().includes(filterTerm.toLowerCase()) ||
      it.level.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="stylist">
      <h2 className="stylist-title">Our Stylists</h2>

      <StylistFilterForm
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
        onSave={() => {
          addSavedTerm(filterTerm);
          setFilterTerm(filterTerm);
        }}
        onClear={() => setFilterTerm("")}
      />

      <div className="stylist-grid">
        {filteredItems.map((it) => (
          <div key={`${it.service}:${it.level}`} className="stylist-card">
            <h3>{it.service}</h3>
            <p>
              <span className="level">{it.level}</span> —{" "}
              <span className="price">${it.price}</span>
            </p>
          </div>
        ))}
        {filteredItems.length === 0 && <p>No matches found.</p>}
      </div>

      <SavedFilters
        savedTerms={savedTerms}
        onSelect={setFilterTerm}
        onRemove={removeSavedTerm}
      />
    </div>
  );
}
