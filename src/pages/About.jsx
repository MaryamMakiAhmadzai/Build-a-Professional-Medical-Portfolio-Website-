import { motion } from "motion/react";
import {
  Brain,
  GraduationCap,
  UsersRound,
  HeartHandshake,
  MapPin,
  Award,
  ArrowUpRight,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { doctor, memberships } from "../data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const values = [
  {
    icon: Brain,
    number: "01",
    title: "Brain & Spine Care",
    text: "Professional focus on conditions affecting the brain, spine, and nervous system.",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Medical Qualifications",
    text: "Explore the medical qualifications and specialist credentials listed in the supplied profile.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Professional Affiliations",
    text: "Discover the national and international neurosurgical organizations listed in the profile.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Patient Communication",
    text: "Clear communication helps patients understand their concerns and discuss care options.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE DOCTOR"
        title="Professional Profile"
        description={`Learn about ${doctor.name}, ${doctor.title}, based at ${doctor.location}.`}
      />

      {/* INTRODUCTION */}
      <section className="section section-light">
        <div className="container about-page-grid">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-image-frame">
              <img
                src="src\pages\public\image\Dr khalid zadran image 2.jpgNPM RUN DEV"
                alt="Doctor in a professional clinical environment"
                loading="lazy"
              />

              <div className="about-image-overlay">
                <span className="overlay-icon">
                  <Stethoscope size={22} />
                </span>
                <div>
                  <strong>Neurosurgical Practice</strong>
                  <p>Brain, Spine & Nervous System</p>
                </div>
              </div>
            </div>

            <motion.div
              className="about-floating-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <div className="floating-icon">
                <ShieldCheck size={23} />
              </div>
              <div>
                <strong>Professional Profile</strong>
                <p>Qualifications & affiliations</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="BACKGROUND & EXPERTISE"
              title="Dedicated to Brain & Spine Care"
              text={`${doctor.name} is presented as a consultant neurosurgeon and brain and spine specialist in Kabul, Afghanistan.`}
            />

            <p className="body-copy">
              This professional profile brings together the supplied
              information about medical qualifications, professional
              affiliations, and areas of interest in neurosurgery. It is
              designed to help visitors explore the available information
              and locate the clinic.
            </p>

            <p className="body-copy">
              The supplied profile also mentions research related to brain
              disorders. Individual diagnosis and treatment decisions
              should always be discussed directly with a qualified medical
              professional.
            </p>

            <div className="about-location-card">
              <div className="location-icon">
                <MapPin size={23} />
              </div>
              <div className="location-content">
                <span>CLINIC LOCATION</span>
                <strong>{doctor.location}</strong>
              </div>
              <ArrowUpRight className="location-arrow" size={21} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL VALUES */}
      <section className="section about-values-section">
        <div className="container">
          <SectionHeading
            eyebrow="PROFESSIONAL APPROACH"
            title="Expertise With a Patient-Focused Approach"
            text="Explore the key themes that shape this professional profile, from specialist knowledge to clear communication."
            center
          />

          <motion.div
            className="value-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="value-card"
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                >
                  <div className="value-card-top">
                    <div className="card-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <span className="value-number">{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="value-card-line" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="qualification-banner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="qualification-icon">
              <Award size={34} />
            </div>

            <div className="qualification-content">
              <span className="eyebrow">MEDICAL BACKGROUND</span>
              <h2>Qualifications & Professional Development</h2>
              <p>
                The supplied profile lists medical qualifications
                including MBBS, MD, RMP, MCPS, and FCPS. Please refer
                to the doctor's verified credentials for their exact
                titles and current professional status.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section className="section">
        <div className="container membership-panel">
          <motion.div
            className="membership-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="membership-heading-icon">
              <UsersRound size={25} />
            </span>

            <p className="eyebrow">PROFESSIONAL MEMBERSHIPS</p>
            <h2>Professional Organizations</h2>
            <p className="section-copy">
              Organizations and professional affiliations listed in
              the information provided for this website.
            </p>
          </motion.div>

          <motion.ul
            className="membership-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {memberships.map((name, index) => (
              <motion.li
                key={name}
                variants={fadeUp}
                whileHover={{ x: 5 }}
              >
                <span className="membership-check">
                  <ShieldCheck size={19} />
                </span>
                <span>{name}</span>
                <ArrowUpRight
                  className="membership-arrow"
                  size={17}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
}