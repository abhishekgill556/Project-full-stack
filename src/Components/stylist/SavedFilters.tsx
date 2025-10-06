type Props = {
  savedTerms: string[];
  onSelect: (term: string) => void;
  onRemove: (term: string) => void;
};

export default function SavedFilters({ savedTerms, onSelect, onRemove }: Props) {
  return (
    <section className="saved-section">
      <h4>Saved Filters</h4>
      {savedTerms.length === 0 ? (
        <p>No saved filters.</p>
      ) : (
        <ul className="saved-list">
          {savedTerms.map(t => (
            <li key={t}>
              <button type="button" onClick={() => onSelect(t)}>{t}</button>
              <button type="button" onClick={() => onRemove(t)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
