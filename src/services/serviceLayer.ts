
import type { Service, ServiceCategory } from "../types/service";
import { serviceRepo } from "../repo/serviceRepo";

export type CreateServiceInput = {
  id?: string;
  name: string;
  price: number;
  duration: number;
  category: ServiceCategory;
  description?: string;
};

const norm = (s: string) => s.trim().toLowerCase();

function validate(input: CreateServiceInput): string[] {
  const errs: string[] = [];
  if (!input.name || input.name.trim().length < 3) errs.push("Name must be at least 3 characters.");
  if (input.price == null || Number.isNaN(input.price) || input.price < 0) errs.push("Price must be zero or greater.");
  if (input.duration == null || Number.isNaN(input.duration) || input.duration <= 0) errs.push("Duration must be a positive number.");
  if (!input.category) errs.push("Category is required.");
  return errs;
}

export const serviceService = {
  async list(query?: string): Promise<Service[]> {
    const all = await serviceRepo.getAll();
    if (!query) return all;
    const q = norm(query);
    return all.filter(s =>
      norm(s.name).includes(q) ||
      norm(s.category).includes(q) ||
      (s.description && norm(s.description).includes(q))
    );
  },

  async create(input: CreateServiceInput): Promise<{ ok: true; value: Service } | { ok: false; errors: string[] }> {
    const errors = validate(input);
    if (errors.length) return { ok: false, errors };

    const all = await serviceRepo.getAll();
    const dup = all.find(s => norm(s.name) === norm(input.name) && norm(s.category) === norm(input.category));
    if (dup) return { ok: false, errors: ["A service with the same name and category already exists."] };

    const id = input.id ?? `${norm(input.category)}-${norm(input.name).replace(/\s+/g, "-")}`;
    const item: Service = {
      id,
      name: input.name.trim(),
      price: Number(input.price),
      duration: Number(input.duration),
      category: input.category,
      description: input.description?.trim() || undefined
      
    };

    const created = await serviceRepo.create(item);
    return { ok: true, value: created };
  },
  

  async remove(id: string): Promise<boolean> {
    return serviceRepo.remove(id);
  }
};