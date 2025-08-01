'use client';
import { motion } from 'framer-motion';
import './expertise.css';
export default function Expertise() {
  return (
    <section className="expertise">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Area of Expertise</h2>
          <h6>PTL offers a wide range of services, including the following:</h6>
          <ul>
            <li>
              Solar energy systems, encompassing the installation of PV modules,
              solar trackers, DC combiner boxes, and full DC cabling works
              including pulling and termination.
            </li>
            <li>
              Medium and low voltage works, including cable laying, jointing,
              termination, as well as excavation and backfilling for underground
              trenches.
            </li>
            <li>
              Installation and termination of MV Package Substations (MVPS)
            </li>
            <li>
              Complete electrical systems installation, covering both standard
              and specialized applications.
            </li>
            <li>
              HVAC system installation, including heating, ventilation, and air
              conditioning solutions designed for optimal comfort and energy
              efficiency.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Key of Success</h2>
          <h6>
            Our success is built on a foundation of key strengths that define
            our approach:
          </h6>
          <ul>
            <li>
              Extensive field experience backed by years of hands-on project
              delivery.
            </li>
            <li>
              In-house capabilities including qualified manpower and dedicated
              technical facilities.
            </li>
            <li>
              Clear understanding of contract requirements and strict adherence
              to obligations.
            </li>
            <li>
              Consistent commitment to delivering high-quality workmanship.
            </li>
            <li>
              A customer-focused approach with deep attention to client
              satisfaction.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
