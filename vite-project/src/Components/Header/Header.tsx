import "./Header.css";

export default function Header() {
  return (
    <>
      {/* Announcement bar */}
      <div className="announce">
        When Style meets Elegance, beauty becomes timeless!
      </div>

      <header className="site-header">
        <div className="header-row">
          {/* Logo */}
          <div className="logo">
            <img 
              src="public/logo.png"   
              alt="APJS Elegance Salon Logo" 
              className="logo-img"
            />
          </div>

          {/* Navigation */}
          <nav className="nav">
            <a href="#">SALON</a>
            <a href="#">HAIR EXTENSIONS</a>
            <a href="#">SHOP</a>
            <a href="#">BLOG</a>
            <a href="#" className="active">CONTACT</a>
            <a href="#" className="pill">BOOK NOW</a>
          </nav>

          {/* Right side */}
          <div className="right">
            <div className="search">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
