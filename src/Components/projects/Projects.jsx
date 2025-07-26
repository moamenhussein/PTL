'use client';
import { motion } from 'framer-motion';
import Title from '../title/Title';
import './projects.css';
import projectOne from '../../assets/images/projects/project1.webp';
import projectTwo from '../../assets/images/projects/project2.webp';
import projectThree from '../../assets/images/projects/project3.webp';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
export default function Projects() {
  const boxs = [
    {
      id: 1,
      img: projectOne,
      project: 'NEOM BAJDAH STUDIO (PV/Diesel) with Battery storage.',
    },
    {
      id: 2,
      img: projectTwo,
      project: "SA'AD-2 SOLAR PV INDEPENDENT POWER PLANT",
    },
    {
      id: 3,
      img: projectThree,
      project: 'SAAD Solar PV IPP - 300 MW AC Solar PV Power Plant',
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <Title title="Latest Projects" />
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {boxs.map((box) => (
            <motion.div
              className="box"
              key={box.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="image">
                <Image src={box.img} alt="Project Image" priority />
              </div>
              <div className="info">
                <h5>Project</h5>
                <div className="content">
                  <h6>{box.project}</h6>
                </div>
                <Link href="/projectDetails">More Details</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <Link href="/projectDetails" className="allProject">
          <h6>View All</h6>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
