import { useAuth } from "@clerk/clerk-react";
 
// -----------------------------
//  TYPE FOR STYLIST
// -----------------------------
export interface Stylist {
  id: string;
  name: string;
  specialty: string;
  experience: number;
}
 
// -----------------------------
//  HOOK FUNCTIONS
// -----------------------------
export function useStylists() {
  const { getToken } = useAuth();
 
  // GET — Public (no token needed)
  async function getStylists(): Promise<Stylist[]> {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/stylists`);
    return res.json();
  }
 
  // POST — Protected
  async function addStylist(data: {
    name: string;
    specialty: string;
    experience: number;
  }): Promise<Stylist> {
    const token = await getToken();
 
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/stylists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
 
    return res.json();
  }
 
  // DELETE — Protected
  async function deleteStylist(id: string): Promise<{ message: string }> {
    const token = await getToken();
 
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/stylists/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
 
    return res.json();
  }
 
  return { getStylists, addStylist, deleteStylist };
}