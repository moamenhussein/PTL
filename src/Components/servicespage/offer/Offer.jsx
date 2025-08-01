'use client';
import { motion } from 'framer-motion';
import './offer.css';
export default function Offer() {
  return (
    <section className="offer">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          className="info"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Services</h2>
          <h3>What we offer</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            At PTL, we specialize in delivering a broad range of
            electromechanical and renewable energy services. Our technical
            expertise, backed by years of hands-on experience, sets us apart in
            a highly competitive market. Clients consistently trust us with
            complex, high-value projects — a trust we’ve earned through
            consistent quality, timely execution, and a commitment to excellence
            that turns every opportunity into long-term partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
