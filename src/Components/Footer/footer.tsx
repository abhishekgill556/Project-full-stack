import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        {/* Left: Business Info */}
        <div className="footer-col">
          <div className="footer-brand">APJS Elegance Salon</div>
          <div className="footer-text">666 St. James Street, Winnipeg</div>
          <div className="footer-text">204 500 2212</div>
        </div>

        {/* Middle: Links */}
        <div className="footer-col">
          <a href="#">book now</a>
          <a href="#">services</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <div>@APJSbeauty</div>
          <div>@APJSsalon</div>
          <div>@APJSweddings</div>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>

        </div>

      {/* Bottom Row */}
      <div className="footer-bottom">APJS Elegance Salon © 2025 Jasleen, Sapana, Abhisek, Prabhkiran</div>
    </footer>
  );
}
