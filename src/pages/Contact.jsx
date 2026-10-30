import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Facebook, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { doctor } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nReason: ${form.reason}\nMessage: ${form.message}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return <>
    <PageHero eyebrow="CONTACT & APPOINTMENTS" title="Request a consultation" description="Use the details below to contact the clinic or prepare an appointment request." />
    <section className="section section-light"><div className="container contact-layout">
      <div className="contact-details"><SectionHeading eyebrow="GET IN TOUCH" title="Contact the clinic" text="Please confirm availability and appointment arrangements directly with the clinic." />
        <div className="contact-card"><span className="contact-icon"><MapPin /></span><div><small>CLINIC LOCATION</small><h3>Rifah Medical Complex</h3><p>Kabul, Afghanistan</p></div></div>
        <a className="contact-card contact-card-link" href={`tel:${doctor.phoneLink}`}><span className="contact-icon"><Phone /></span><div><small>PHONE</small><h3>{doctor.phone}</h3><p>Tap to call from your device</p></div><ArrowUpRight className="contact-arrow" size={18} /></a>
        <a className="contact-card contact-card-link" href={doctor.facebook} target="_blank" rel="noreferrer"><span className="contact-icon"><Facebook /></span><div><small>SOCIAL PROFILE</small><h3>Facebook profile</h3><p>Open the supplied profile link</p></div><ArrowUpRight className="contact-arrow" size={18} /></a>
        <div className="availability-note"><Clock size={18} /><p>Clinic hours and appointment availability were not confirmed in the supplied information. Please call to verify.</p></div>
      </div>
      <motion.div className="form-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="form-top"><p className="eyebrow">APPOINTMENT ENQUIRY</p><h2>Send a request</h2><p>Fill in the form to prepare a consultation request.</p></div>
        {submitted && <div className="form-success" role="status"><CheckCircle2 size={18} /> Your email application should open with the request details. Please send the email to the clinic's verified contact address.</div>}
        <form onSubmit={submit}>
          <label htmlFor="name">Full name <span>*</span></label><input id="name" name="name" value={form.name} onChange={update} required placeholder="Enter your full name" />
          <label htmlFor="phone">Phone number <span>*</span></label><input id="phone" name="phone" value={form.phone} onChange={update} required placeholder="+93 ..." />
          <label htmlFor="reason">Reason for consultation <span>*</span></label><select id="reason" name="reason" value={form.reason} onChange={update} required><option value="">Choose an area</option><option>Brain-related concern</option><option>Spine or disc concern</option><option>Nerve-related concern</option><option>Follow-up consultation</option><option>Other / not sure</option></select>
          <label htmlFor="message">Message <small>(optional)</small></label><textarea id="message" name="message" value={form.message} onChange={update} rows="4" placeholder="Briefly describe your enquiry (avoid sharing highly sensitive information)." />
          <button className="button form-submit" type="submit">Prepare Request <Send size={16} /></button>
          <p className="form-privacy">This demo form opens your email application. It does not store or send patient information to a server.</p>
        </form>
      </motion.div>
    </div></section>
  </>;
}