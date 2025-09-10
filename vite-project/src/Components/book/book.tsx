import "./Book.css";
 
export default function Booking() {
  return (
    <section id="booking" className="booking">
      <h2>Book an Appointment</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="date" name="date" required />
        <select name="service" required>
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