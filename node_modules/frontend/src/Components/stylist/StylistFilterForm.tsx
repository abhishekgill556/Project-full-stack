type Props = {
  filterTerm: string;
  setFilterTerm: (v: string) => void;
  onSave: () => void;
  onClear: () => void;
};

export default function StylistFilterForm({ filterTerm, setFilterTerm, onSave, onClear }: Props) {
  return (
    <form onSubmit={e => e.preventDefault()} className="stylist-filter-form">
      <label>
        Filter by service or level:
        <input
          type="text"
          value={filterTerm}
          onChange={e => setFilterTerm(e.target.value)}
          placeholder="e.g., haircut or junior"
        />
      </label>
      <button type="button" onClick={onSave}>Save filter</button>
      {filterTerm && <button type="button" onClick={onClear}>Clear</button>}
    </form>
  );
}
