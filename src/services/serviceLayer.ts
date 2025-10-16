import { serviceRepo } from "../repo/serviceRepo";
import type { Service } from "../types/service";

export const serviceLayer = {
  list(): Promise<Service[]> {
    return serviceRepo.listAll();
  },
  search(q?: string): Promise<Service[]> {
    return serviceRepo.search(q);
  },
};
