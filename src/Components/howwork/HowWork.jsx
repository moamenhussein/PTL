'use client';
import './howwork.css';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaDraftingCompass } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
export default function HowWork() {
  const works = [
    {
      id: 1,
      icon: <FaPhoneAlt />,
      heading: ' Get in Touch',
      paragraph: ' Reach out to our team to discuss your project requirements.',
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt />,
      heading: ' Site Visit & Assessment',
      paragraph:
        'We conduct a thorough site assessment to understand technical needs.',
    },
    {
      id: 3,
      icon: <FaDraftingCompass />,
      heading: ' Planning & Engineering',
      paragraph:
        'Our engineers design tailored solutions based on your project scope.',
    },
    {
      id: 4,
      icon: <FaTools />,
      heading: ' Execution & Delivery',
      paragraph:
        'Our skilled team executes the project safely, efficiently, and on time.',
    },
  ];
  return (
    <section className="howwork">
      <div className="container">
        <motion.div
          className="headtitle"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-6xl">How It Works?</h3>
        </motion.div>
        <motion.p
          className="headparagraph"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          We follow a clear, proven process to deliver reliable solar and power
          solutions.
        </motion.p>
        <motion.div
          className="boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {works.map((work) => {
            return (
              <div className="work" key={work.id}>
                <h3>{work.icon}</h3>
                <h5>{work.heading}</h5>
                <p>{work.paragraph}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
