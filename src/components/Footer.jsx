import { Link } from "react-router-dom";
import { MapPin, Phone, Facebook, ArrowUpRight } from "lucide-react";
import { doctor } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-mark"><span>+</span></div>
          <h3>{doctor.name}</h3>
          <p>Consultant Neurosurgeon · Brain & Spine Specialist</p>
        </div>
        <div><h4>Explore</h4><Link to="/about">About the Doctor</Link><Link to="/qualifications">Qualifications</Link><Link to="/specializations">Specializations</Link></div>
        <div><h4>Contact</h4><p><MapPin size={15} /> {doctor.location}</p><a href={`tel:${doctor.phoneLink}`}><Phone size={15} /> {doctor.phone}</a><a href={doctor.facebook} target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Dr. Khalid Khan Zadran — Profile website</span><span>For information and appointment requests</span></div>
    </footer>
  );
}