import { useEffect, useMemo, useState } from "react";
import { stylistRepository } from "../apis/stylistRepo";
import { filterStylists } from "../services/stylistService";
import type { StylistData } from "../types/stylist";

export function useStylists() {
  const [allData, setAllData] = useState<StylistData>({});
  const [filterTerm, setFilterTerm] = useState("");
  const [savedTerms, setSavedTerms] = useState<string[]>([]);

  useEffect(() => {
    stylistRepository.getAll().then(setAllData);
  }, []);

  const filteredData = useMemo(
    () => filterStylists(allData, filterTerm),
    [allData, filterTerm]
  );

  const addSavedTerm = (term: string) => {
    const t = term.trim();
    if (t && !savedTerms.includes(t)) setSavedTerms([...savedTerms, t]);
  };

  const removeSavedTerm = (term: string) => {
    setSavedTerms(savedTerms.filter((x) => x !== term));
  };

  return {
    data: filteredData,
    filterTerm,
    setFilterTerm,
    savedTerms,
    addSavedTerm,
    removeSavedTerm
  };
}
