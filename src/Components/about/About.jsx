'use client';
import './about.css';
import aboutImage from '../../assets/images/about/about.webp';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function About() {
  return (
    <section className="about" id='about'>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="info"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-3xl md:text-6xl'>About</h3>
          <h5 className='text-2xl md:text-3xl'>Power Transmission Line Installation & Commissioning</h5>
          <p>
            Power Transmission Line Contracting specializes in renewable energy
            and MEP (Mechanical, Electrical, and Plumbing) solutions. With
            strong roots in the UAE since 2008, we expanded into the Saudi
            market in 2023, combining deep expertise with advanced technologies
            to deliver efficient, eco-friendly systems.
          </p>
          <p>
            We provide complete electromechanical services including solar
            system installation, MV & LV switchgear, security and low current
            systems, BMS, SCADA, HVAC, plumbing, and fire protection. Our
            experienced teams focus on safety, quality, and performance to meet
            every project’s unique needs.
          </p>
          <Link href="/" className='more'>Read More</Link>
        </motion.div>
        <motion.div
          className="image"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={aboutImage} alt="About Image" priority  />
        </motion.div>
      </div>
    </section>
  );
}
