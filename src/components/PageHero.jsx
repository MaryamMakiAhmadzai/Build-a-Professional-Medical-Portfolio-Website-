import { motion } from "motion/react";

export default function PageHero({ eyebrow, title, description }) {
  return <section className="page-hero"><div className="container">
    <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>{eyebrow}</motion.p>
    <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>{title}</motion.h1>
    <motion.p className="page-hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>{description}</motion.p>
  </div></section>;
}