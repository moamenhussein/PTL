'use client';
import { motion } from 'framer-motion';
import './footer.css';
import footerImage from '../../assets/images/footer/logo.webp';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoLocation } from 'react-icons/io5';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer>
      <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={footerImage} alt="Footer Image" />
          <p>
            We energize the future with reliable and innovative power
            transmission services, delivering end-to-end solutions that meet the
            highest standards of efficiency, safety, and sustainability —
            powering communities, industries, and progress.
          </p>
          <div className="phone">
            <FaPhoneAlt />
            <div className="info">
              <h4>Contact Us</h4>
              <h6>KSA : +966 54 755 4098</h6>
              <h6>UAE : +971 4 2599741</h6>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="heading">Quick Links</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/projectDetails">Projects</Link>
            </li>
            <li>
              <Link href="/">Gallery</Link>
            </li>
            <li>
              <Link href="/">Our Team</Link>
            </li>
            <li>
              <Link href="/certificate">Certificates</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="heading">Services</h2>
          <ul>
            <li>
              <Link href="/">Transformer Services</Link>
            </li>
            <li>
              <Link href="/">Switchgear Installation</Link>
            </li>
            <li>
              <Link href="/">Protection & Control</Link>
            </li>
            <li>
              <Link href="/">Energy Efficiency Upgrades</Link>
            </li>
            <li>
              <Link href="/">Power-Transmission</Link>
            </li>
            <li>
              <Link href="/">Cable-Laying</Link>
            </li>
            <li>
              <Link href="/">Operation-Maintenance</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="heading">Contact Information</h2>
          <div className="socialCntact">
            <div>
              <FaPhoneAlt />
              <h5>Dubai : +971 4 2599741</h5>
            </div>
            <div>
              <FaPhoneAlt />
              <h5>KSA : +966 54 755 4098</h5>
            </div>
            <div>
              <SiGmail />
              <h5>info@ptl.sa</h5>
            </div>
            <div>
              <IoLocation />
              <h5>Dubai : United Arab Emirates - Dubai</h5>
            </div>
            <div>
              <IoLocation className='ksaIcon' />
              <h5>KSA : Kingdom of Saudi Arabia - Riyadh - Ishbiliyah</h5>
            </div>
          </div>
        </motion.div>
      </div>
      <h5 className='copyright'>
        CopyRight <span>PTL</span> 2025 &copy;. All Rights Reserved
      </h5>
    </footer>
  );
}
