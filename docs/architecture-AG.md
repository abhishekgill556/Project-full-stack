# Architecture - Stylist Feature (Abhishek Gill)

---

## What does this hook/service/repository do?

**Hook:**  
The `useStylists` hook looks after all the state used in the Stylist page.  
It keeps track of the filter term and saved filters, gets data from the repository, and applies the filter logic using the service.  
This helps display only the stylists that match the user's search.

**Service:**  
The `stylistService` is where the main filtering logic happens.  
It checks the stylist data and finds services or levels that match what the user types in.  
This keeps the filtering rules separate from the UI.

**Repository:**  
The `stylistRepo` is used to store and access the stylist data.  
It has async methods like `getAll`, `update`, and `remove` that work with the test data.  
It's like a small database for now, until we connect a real backend later.

---

## How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

**Hook:**  
I added only the parts that deal with user input and what's shown on the page.  
Anything related to business logic or data access was kept out, so the hook stays focused on presentation and state.

**Service:**  
The service only contains the filtering logic because that's part of business rules.  
This keeps the hook and component simple while making the filtering easy to reuse later.

**Repository:**  
The repository has just the data access part, like getting and updating stylist info.  
This way, if the data source changes in the future, the rest of the project will still work the same.

---

## Where is this implementation made use of in the project and how?

**Hook:**  
Used in `StylistsPage.tsx` to manage all the data and filter behavior for the stylist section.

**Service:**  
Used inside the `useStylists` hook to handle the filtering before sending data to the component.

**Repository:**  
Also used in the `useStylists` hook to load stylist data from `stylists.testdata.ts` and return it to the page.
