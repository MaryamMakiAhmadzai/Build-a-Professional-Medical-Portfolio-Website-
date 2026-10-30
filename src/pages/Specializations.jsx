import { motion } from "motion/react";
import { Brain, Activity, Scan, GitBranch, Target, HeartPulse, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { specialties } from "../data/siteData";

const icons = [Brain, Activity, Scan, GitBranch, Target, HeartPulse];

export default function Specializations() {
  return <>
    <PageHero eyebrow="CLINICAL AREAS" title="Specializations" description="An overview of the brain, spine, and nerve-related areas described in the supplied professional information." />
    <section className="section section-light"><div className="container"><SectionHeading eyebrow="AREAS OF FOCUS" title="Neurosurgical care areas" text="A consultation is needed to understand symptoms, review investigations, and determine an appropriate care plan." />
      <div className="all-specialty-grid">{specialties.map((item, i) => { const Icon = icons[i]; return <motion.article className="specialty-card specialty-large" key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}><div className="card-icon"><Icon size={23} /></div><span className="card-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="card-link" to="/contact">Ask about a consultation <ArrowRight size={16} /></Link></motion.article>; })}</div>
    </div></section>
    <section className="notice-section"><div className="container medical-notice"><span className="notice-mark">i</span><div><strong>Important medical information</strong><p>This website is for general information only and does not provide diagnosis or treatment. In an emergency, seek urgent medical care. Treatment options depend on clinical evaluation and individual circumstances.</p></div></div></section>
  </>;
}