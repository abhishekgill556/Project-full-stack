import type { Service } from "../types/service";
import { serviceRepo } from "../apis/serviceRepo";

export type CreateServiceInput = {
  name: string;
  price: number;
  duration: number;
  category: string;
  description?: string;
};

function validate(input: CreateServiceInput): string[] {
  const errs: string[] = [];
  if (!input.name || input.name.trim().length < 3)
    errs.push("Name must be at least 3 characters.");
  if (input.price == null || Number.isNaN(input.price) || input.price < 0)
    errs.push("Price must be zero or greater.");
  if (input.duration == null || Number.isNaN(input.duration) || input.duration <= 0)
    errs.push("Duration must be a positive number.");
  if (!input.category)
    errs.push("Category is required.");

  return errs;
}

export const serviceService = {
  async list(): Promise<Service[]> {
    return serviceRepo.getAll(); 
  },

  async create(input: CreateServiceInput):
    Promise<{ ok: true; value: Service } | { ok: false; errors: string[] }> 
  {
    const errors = validate(input);
    if (errors.length) return { ok: false, errors };

 
    const created = await serviceRepo.create(input);
    return { ok: true, value: created };
  },

  async remove(id: number | string): Promise<boolean> {
    return serviceRepo.remove(Number(id));
  }
};
