'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './work.css';
export default function Work() {
  return (
    <section className="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready to Work With Us?</h2>
          <p>
            Let’s discuss how we can support your project goals with reliable
            MEP and energy solutions.
          </p>
          <div className="links">
            <Link href="/contact">Contact Us</Link>
            <Link href="/about">Learn More</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
