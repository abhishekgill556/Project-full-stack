import "./Book.css";
 
export default function Booking() {
  return (
    <section id="booking" className="booking">
      <h2>Book an Appointment</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <select name="service" aria-label="Select a service" required>
        <option value="">Select Service</option>
        <option value="Haircut">Haircut</option>
        <option value="Extensions">Extensions</option>
        <option value="Wedding">Wedding</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}