import type { StylistData } from "../types/stylist";

export function filterStylists(data: StylistData, term: string): StylistData {
  const t = term.trim().toLowerCase();
  if (!t) return data;

  const filtered: StylistData = {};

  for (const [category, levels] of Object.entries(data)) {
    const matchCategory = category.toLowerCase().includes(t);

    const matchedLevels: Record<string, number> = {};
    for (const [level, price] of Object.entries(levels)) {
      if (level.toLowerCase().includes(t)) matchedLevels[level] = price;
    }

    if (matchCategory || Object.keys(matchedLevels).length > 0) {
      filtered[category] = matchCategory ? levels : matchedLevels;
    }
  }

  return filtered;
}
