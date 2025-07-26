'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function SectionOne() {
  return (
    <section className="projectDetails">
      <div className="container">
        <motion.div
          className="info"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Projects</h3>
          <div className="home">
            <Link href="/">Home</Link>
            <span> &gt; Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
