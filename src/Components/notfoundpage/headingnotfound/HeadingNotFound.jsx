'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './headingnotfound.css';
import { MdHome } from 'react-icons/md';
export default function HeadingNotFound() {
  return (
    <section className="headingnotfound">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl md:text-6xl">Page Not Found</h3>
        <div className="button">
          <Link href="/" className="link">
            <MdHome />
            <span>Home / </span>
          </Link>
          <p> Page Not Found</p>
        </div>
      </motion.div>
    </section>
  );
}
