'use client';
import { motion } from 'framer-motion';
import './error.css';
import iconImage from '../../../assets/images/notfound/notfound.gif';
import Image from 'next/image';
import Link from 'next/link';
export default function Error() {
  return (
    <section className="error">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="icon">
          <span>4</span>
          <Image src={iconImage} alt="Icon Image" />
          <span>4</span>
        </div>
        <div className="information">
          <h4>
            The Page you were looking for,
            <br /> couldn't be found.
          </h4>
          <p>
            The page you are looking for might have been removed, had its name
            <br />
            changed, or is temporarily unavailable.
          </p>
          <div className="buttons">
            <Link href="/">Home</Link>
            <Link href="/">Back To Home</Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
