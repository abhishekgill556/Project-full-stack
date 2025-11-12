import "./stylist.css";
import stylistData from "../../data/stylist.json"; 

export default function Stylist() {
  return (
    <div className="stylist">
      <h2 className="stylist-title">Our Stylists</h2>

      {Object.entries(stylistData).map(([serviceName, levels]) => (
        <div key={serviceName} className="stylist-block">
          <h3>{serviceName}</h3>
          <ul>
            {Object.entries(levels as Record<string, number>).map(([level, price]) => (
              <li key={level}>
                <span className="level">{level}</span> —{" "}
                <span className="price">${price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
