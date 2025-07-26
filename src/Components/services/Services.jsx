'use client';
import { motion } from 'framer-motion';
import Title from '../title/Title';
import './services.css';
import Cards from './cards/Cards';
export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <motion.div
          className="headingTitle"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title title="Services" />
          <h5>Our services including but not limited to the following</h5>
        </motion.div>
        <Cards />
      </div>
    </section>
  );
}
