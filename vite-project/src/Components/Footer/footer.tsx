import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        {/* Left: Business Info */}
        <div className="footer-col">
          <div className="footer-brand">Prep Hair</div>
          <div className="footer-text">173 Lilac Street, Winnipeg</div>
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
          <div>@prephair</div>
          <div>@preptulum</div>
          <div>@prepweddings</div>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>
        </div>

        </div>

      {/* Bottom Row */}
      <div className="footer-bottom">Prep Hair © 2025</div>
    </footer>
  );
}
