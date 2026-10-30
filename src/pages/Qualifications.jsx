import { motion } from "motion/react";
import { Award, GraduationCap, BadgeCheck, BookOpen } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { qualifications, memberships } from "../data/siteData";

export default function Qualifications() {
  return <>
    <PageHero eyebrow="EDUCATION & CREDENTIALS" title="Qualifications" description="A structured overview of the medical qualifications and professional memberships listed in the supplied profile." />
    <section className="section section-light"><div className="container">
      <SectionHeading eyebrow="MEDICAL CREDENTIALS" title="Education and qualifications" text="Qualification abbreviations are shown as supplied. Please confirm exact credential names and dates with the clinic before publication." />
      <div className="qualification-layout"><div className="timeline">{qualifications.map((q, i) => <motion.div className="timeline-item" key={q.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span className="timeline-dot"><GraduationCap size={17} /></span><div className="timeline-content"><span className="timeline-count">QUALIFICATION 0{i + 1}</span><h3>{q.title}</h3><p>{q.detail}</p></div></motion.div>)}</div>
        <aside className="qualification-aside"><div className="aside-icon"><Award size={27} /></div><h3>Neurosurgical training</h3><p>The provided information lists FCPS Neurosurgery and the College of Physicians and Surgeons Pakistan.</p><div className="aside-rule" /><div className="aside-fact"><BadgeCheck size={18} /><span>Medical credentials listed from supplied profile</span></div><div className="aside-fact"><BookOpen size={18} /><span>Education: Ayub Medical College, Abbottabad (as provided)</span></div></aside>
      </div>
    </div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="MEMBERSHIPS" title="Professional organizations" text="Organizations listed in the supplied profile." />
      <div className="organization-grid">{memberships.map((name, i) => <motion.div className="organization-card" key={name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}><span className="org-number">0{i + 1}</span><div><h3>{name}</h3><p>Listed professional affiliation</p></div><BadgeCheck size={21} /></motion.div>)}</div>
    </div></section>
  </>;
}