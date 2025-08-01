'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './cardsbox.css';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiSolarPower } from 'react-icons/gi';
import { MdDesignServices } from 'react-icons/md';
export default function CardsBox() {
  const cards = [
    {
      id: 1,
      heading: 'Project Execution',
      paragraph:
        'Seamless project delivery from planning to handover, ensuring precision.',
      svg: <FaProjectDiagram />,
    },
    {
      id: 2,
      heading: 'Renewable Energy Integration',
      paragraph:
        'Expert solutions for integrating solar and clean energy systems into new and existing infrastructure.',
      svg: <GiSolarPower />,
    },
    {
      id: 3,
      heading: 'MEP System Design',
      paragraph:
        'Tailored MEP design services based on project needs, combining efficiency with sustainability.',
      svg: <MdDesignServices />,
    },
  ];
  return (
    <section className="cardscontent">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {cards.map((card) => {
          return (
            <motion.div
              className="cardbox"
              key={card.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {card.svg}
              <h2>{card.heading}</h2>
              <p>{card.paragraph}</p>
              <Link href="/">Read More</Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
