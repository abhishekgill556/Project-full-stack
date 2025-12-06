import { useState, useEffect } from "react";

import { useUser } from "@clerk/clerk-react";


import { useStylists } from "../../hooks/useStylists";

import type { Stylist } from "../../hooks/useStylists";
 
export default function StylistPage() {

  const { isSignedIn } = useUser();

  const { getStylists, addStylist, deleteStylist } = useStylists();
 
  const [stylists, setStylists] = useState<Stylist[]>([]);
 
  useEffect(() => {

    getStylists().then(setStylists);

  }, []);
 
  async function handleAdd() {

    const newStylist = {

      name: "New Stylist",

      specialty: "Hair Styling",

      experience: 3,

    };
 
    const created = await addStylist(newStylist);

    setStylists([...stylists, created]);

  }
 
  async function handleDelete(id: string) {

    await deleteStylist(id);

    setStylists(stylists.filter((s) => s.id !== id));

  }
 
  return (
<div>
<h1>Our Stylists</h1>
 
      {isSignedIn ? (
<button onClick={handleAdd}>Add Stylist</button>

      ) : (
<p>You must sign in to add or remove stylists.</p>

      )}
 
      <ul>

        {stylists.map((s) => (
<li key={s.id}>
<p>
<strong>{s.name}</strong>
</p>
<p>Specialty: {s.specialty}</p>
<p>Experience: {s.experience} years</p>
 
            {isSignedIn && (
<button onClick={() => handleDelete(s.id)}>Remove</button>

            )}
</li>

        ))}
</ul>
</div>

  );

}

