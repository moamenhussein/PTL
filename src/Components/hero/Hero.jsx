'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './hero.css';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import heroImage from '../../assets/images/hero/Hero.webp';
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="info"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Welcome to Power Transmission Line Contracting</h3>
          <Typewriter
            options={{
              strings: [
                'This is where energy begins.',
                'We bring your energy vision to life.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>
            We don’t just transmit power - we turn ideas into impact. From
            concept to connection, we bring energy visions to life with
            precision and purpose. With every line we build, we shape a
            stronger, more connected future.
          </p>
          <div className="buttons">
            <Link className="active" href="/about">
              Read More
            </Link>
            <Link href="/contact" className="started">
              Get Started
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="image"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={heroImage} alt="Hero Image" priority />
        </motion.div>
      </div>
    </section>
  );
}
