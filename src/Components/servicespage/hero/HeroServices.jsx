'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './heroservices.css';
export default function HeroServices() {
  return (
    <section className="heroservices">
      <div className="container">
        <motion.div
          className="info"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Services</h3>
          <div className="home">
            <Link href="/">Home</Link>
            <span> &gt; Services</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
