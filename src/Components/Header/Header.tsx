import { NavLink } from "react-router-dom";
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
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="#" className="nav-link">
              Hair Extensions
            </NavLink>
            <NavLink to="#" className="nav-link">
              Shop
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="#" className="nav-link">
              Contact
            </NavLink>
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
