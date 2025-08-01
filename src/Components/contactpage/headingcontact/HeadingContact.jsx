'use client';
import './headingcontact.css';
import { motion } from 'framer-motion';
export default function HeadingContact() {
  return (
    <section className="headingcontact">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          contact us
        </motion.h3>
      </div>
    </section>
  );
}
