import { motion } from 'framer-motion';
import './headteam.css';
import Link from 'next/link';
export default function HeadingTeam() {
  return (
    <section className="headingteam">
      <div className="container">
        <motion.div
          className="info"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Our Team</h3>
          <div className="home">
            <Link href="/">Home</Link>
            <span> &gt; Our Team</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
