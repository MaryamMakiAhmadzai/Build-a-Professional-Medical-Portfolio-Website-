import { Link, NavLink } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { doctor } from "../data/siteData";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/qualifications", label: "Qualifications" },
  { to: "/specializations", label: "Specializations" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Brain size={25} /></span>
          <span><strong>Dr. Khalid Khan Zadran</strong><small>NEUROSURGERY</small></span>
        </Link>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <Link className="button button-small" to="/contact" onClick={() => setOpen(false)}>Book a Consultation</Link>
        </nav>
      </div>
    </header>
  );
}