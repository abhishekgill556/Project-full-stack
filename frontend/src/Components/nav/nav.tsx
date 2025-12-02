import { NavLink } from "react-router-dom";
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">

      <nav className="nav">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/stylists">Stylists</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>

        {/* ---- LOGIN / LOGOUT BUTTONS ---- */}
        <SignedOut>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

      </nav>
    </header>
  );
}
