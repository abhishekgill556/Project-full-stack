import "./Header.css";

export default function Header() {
  return (
    <>

      <div className="announce">
        When Style meets Elegance, beauty becomes timeless!
      </div>

      <header className="site-header">
        <div className="header-row">
          <div className="logo">
            <img 
              src="public/logo.png"   
              alt="APJS Elegance Salon Logo" 
              className="logo-img"
            />
          </div>
          <nav className="nav">
            <a href="#">SALON</a>
            <a href="#">HAIR EXTENSIONS</a>
            <a href="#">SHOP</a>
            <a href="#">BLOG</a>
            <a href="#" className="active">CONTACT</a>
          </nav>
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
