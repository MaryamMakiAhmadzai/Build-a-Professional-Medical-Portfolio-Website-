import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Brain, ShieldCheck, Stethoscope, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { doctor, specialties } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
          <div className="hero-kicker"><span className="status-dot" /> NEUROSURGERY · KABUL, AFGHANISTAN</div>
          <h1>Expertise for the <em>brain.</em><br />Care for the <em>whole person.</em></h1>
          <p className="hero-description">Meet {doctor.name}, {doctor.title} and {doctor.specialty.toLowerCase()}, with a patient-focused approach to neurological care.</p>
          <div className="hero-actions"><Link className="button" to="/contact">Request a Consultation <ArrowRight size={17} /></Link><Link className="text-link" to="/about">Learn more about the doctor <ArrowUpRight size={16} /></Link></div>
          <div className="hero-location"><MapPin size={16} /><span>{doctor.location}</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
          <div className="portrait-frame">
<img src="src\pages\public\image\Dr khalid zadran image 3.jpg" alt="Dr. Khalid Khan Zadran" />
            <div className="portrait-shade" />
            <div className="portrait-label"><span className="label-icon"><Stethoscope size={18} /></span><span><strong>Consultant Neurosurgeon</strong><small>Brain & Spine Specialist</small></span></div>
          </div>
          <div className="floating-card floating-top"><span className="floating-icon"><Brain size={19} /></span><span><strong>Brain & Spine</strong><small>Specialist care</small></span></div>
          <div className="floating-card floating-bottom"><ShieldCheck size={19} /><span><strong>Patient-focused</strong><small>Clear guidance</small></span></div>
          <div className="visual-orbit" />
        </motion.div>
      </div>
      <div className="hero-bottom-line"><div className="container"><span>CLINICAL FOCUS</span><span>NEUROSURGERY</span><span>BRAIN & SPINE</span><span>KABUL, AFGHANISTAN</span></div></div>
    </section>

    <section className="trust-strip"><div className="container trust-grid">
      <div><span className="trust-number">01</span><span><strong>Brain conditions</strong><small>Assessment & guidance</small></span></div>
      <div><span className="trust-number">02</span><span><strong>Spine care</strong><small>Disc & nerve concerns</small></span></div>
      <div><span className="trust-number">03</span><span><strong>Professional profile</strong><small>Qualifications & memberships</small></span></div>
      <div><span className="trust-number">04</span><span><strong>Consultation requests</strong><small>Direct contact information</small></span></div>
    </div></section>

    <section className="section section-light"><div className="container">
      <SectionHeading eyebrow="AREAS OF FOCUS" title="Specialized care. Thoughtful guidance." text="Explore the main areas of neurosurgical interest and patient guidance presented in this professional profile." />
      <div className="specialty-grid">
        {specialties.slice(0, 3).map((item, i) => {
          const Icon = [Brain, ShieldCheck, Stethoscope][i];
          return <motion.article className="specialty-card" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
            <div className="card-icon"><Icon size={23} /></div><span className="card-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><Link to="/specializations" className="card-link">Explore area <ArrowRight size={16} /></Link>
          </motion.article>;
        })}
      </div>
      <div className="section-action"><Link className="button button-outline" to="/specializations">View all specializations <ArrowRight size={16} /></Link></div>
    </div></section>

    <section className="section about-teaser"><div className="container teaser-grid">
      <div className="teaser-art"><div className="teaser-image"><img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80" alt="Medical imaging displayed on a screen" /></div><div className="teaser-stamp"><Brain size={25} /><span>Brain &<br />Spine Care</span></div></div>
      <div className="teaser-copy"><SectionHeading eyebrow="ABOUT THE DOCTOR" title="A focused approach to neurological care." text="This profile brings together the doctor's stated qualifications, professional memberships, areas of interest, and clinic contact information in one accessible place." />
        <ul className="check-list"><li><CheckCircle2 size={18} /> Qualifications and professional background</li><li><CheckCircle2 size={18} /> Brain and spine care areas</li><li><CheckCircle2 size={18} /> Clear clinic contact details</li></ul>
        <Link className="button" to="/about">Read the profile <ArrowRight size={17} /></Link>
      </div>
    </div></section>

    <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow">TAKE THE NEXT STEP</p><h2>Need to discuss a neurological concern?</h2><p>Contact the clinic to ask about availability and consultation arrangements.</p></div><Link className="button button-white" to="/contact">Contact the Clinic <ArrowUpRight size={17} /></Link></div></section>
  </>;
}