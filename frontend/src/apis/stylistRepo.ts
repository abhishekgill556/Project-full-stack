import type { StylistData } from "../types/stylist";
import { STYLISTS_TESTDATA } from "../data/stylists.testdata";

let store: StylistData = { ...STYLISTS_TESTDATA };

export const stylistRepository = {
  async getAll(): Promise<StylistData> {
    return { ...store };
  },
  async update(service: string, levels: Record<string, number>): Promise<void> {
    store[service] = levels;
  },
  async remove(service: string): Promise<void> {
    delete store[service];
  }
};
