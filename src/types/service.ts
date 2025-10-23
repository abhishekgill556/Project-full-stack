export type ServiceCategory =
  | "Cuts"
  | "Color"
  | "Hair Extensions"
  | "Other"
  | (string & {});

export interface Service {
  id: string;
  name: string;
  price: number;    
  duration: number;  
  category: ServiceCategory;
  description?: string;
}
