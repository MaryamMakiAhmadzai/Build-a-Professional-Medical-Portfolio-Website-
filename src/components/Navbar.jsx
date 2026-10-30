import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Qualifications", "/qualifications"],
  ["Specializations", "/specializations"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Brain size={22} /></span>
          <span><strong>Dr. Khalid Khan Zadran</strong><small>NEUROSURGERY</small></span>
        </Link>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {label}
            </NavLink>
          ))}
          <Link className="button button-small" to="/contact" onClick={() => setOpen(false)}>Request a Visit <span>↗</span></Link>
        </div>
      </nav>
    </header>
  );
}