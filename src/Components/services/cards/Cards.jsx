'use client';
import { easeInOut, easeOut, motion } from 'framer-motion';
import './cards.css';
import serviceOne from '../../../assets/images/services/service1.webp';
import serviceTwo from '../../../assets/images/services/service2.webp';
import serviceThree from '../../../assets/images/services/service3.webp';
import serviceFour from '../../../assets/images/services/service4.webp';
import serviceFive from '../../../assets/images/services/service5.webp';
import serviceSix from '../../../assets/images/services/service6.webp';
import serviceSiven from '../../../assets/images/services/service7.webp';
import serviceEight from '../../../assets/images/services/service8.webp';
import serviceNine from '../../../assets/images/services/service9.webp';
import Image from 'next/image';
export default function Cards() {
  const boxs = [
    {
      id: 1,
      img: serviceOne,
      title: 'Solar Energy Systems Installation',
      paragraph: 'Integrating solar systems into power transmission networks',
    },
    {
      id: 2,
      img: serviceTwo,
      title: 'Electrical Systems Work',
      paragraph: 'Power cables and control systems for energy flow',
    },
    {
      id: 3,
      img: serviceThree,
      title: 'Operation & Maintenance',
      paragraph: 'Ensuring reliable performance of transmission infrastructure',
    },
    {
      id: 4,
      img: serviceFour,
      title: 'MV & LV Switchgear Installation',
      paragraph: 'Controlling and protecting medium and low voltage',
    },
    {
      id: 5,
      img: serviceFive,
      title: 'Transformer Installation',
      paragraph:
        'Voltage conversion between transmission and distribution levels',
    },
    {
      id: 6,
      img: serviceSix,
      title: 'Cable Laying (MV/HV)',
      paragraph: 'Installing underground or overhead power transmission cables',
    },
    {
      id: 7,
      img: serviceSiven,
      title: ' Substation Construction',
      paragraph: 'Core facility for power switching and distribution',
    },
    {
      id: 8,
      img: serviceEight,
      title: 'SCADA & Automation Systems',
      paragraph: 'Remote monitoring and control of transmission systems',
    },
    {
      id: 9,
      img: serviceNine,
      title: 'Protection & Control Systems',
      paragraph:
        'Prevent faults and safeguard transmission equipment effectively',
    },
  ];
  return (
    <section className="cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-12">
      {boxs.map((card) => {
        return (
          <motion.div
            className="card"
            key={card.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image src={card.img} alt="Image" priority />
            <h3>{card.title}</h3>
            <p>{card.paragraph}</p>
          </motion.div>
        );
      })}
    </section>
  );
}
