'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './hero.css';
export default function Hero() {
  return (
    <section className="herosection">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Certificates</h3>
        <p>Some of our certificate photos</p>
        <div className="links">
          <Link href="/">Home</Link>
          <span> &gt; Certificates</span>
        </div>
      </motion.div>
    </section>
  );
}
