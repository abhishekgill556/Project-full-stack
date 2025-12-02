import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
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

            <NavLink to="/stylists" className="nav-link">
              Stylists
            </NavLink>

            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>

            <NavLink to="/reviews" className="nav-link">
              Reviews
            </NavLink>

            {/* Optional: only show “My Posts” to logged-in users */}
            <SignedIn>
              <NavLink to="/blog/my-posts" className="nav-link">
                My Posts
              </NavLink>
            </SignedIn>
          </nav>

          <div className="right">
            <div className="search">
              <input type="text" placeholder="Search" />
            </div>

            {/* When logged OUT → show Login / Register */}
            <SignedOut>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </SignedOut>

            {/* When logged IN → show Clerk user button (includes logout) */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </header>
    </>
  );
}
