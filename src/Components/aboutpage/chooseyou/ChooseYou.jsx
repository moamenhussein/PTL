'use client';
import { motion } from 'framer-motion';
import './choose.css';
export default function Choose() {
  return (
    <section className="choose">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Expertise</h2>
          <p className="info">
            Our Expertise At Power Transmission Line Contracting, we bring over
            15 years of experience in delivering high-quality renewable energy
            and MEP (Mechanical, Electrical, and Plumbing) solutions. Since
            2008, our expert teams have successfully executed projects across
            the UAE and recently expanded into the Saudi market in 2023. We
            offer complete electromechanical services—from solar systems and
            switchgear to HVAC, plumbing, and fire protection—designed for
            safety, sustainability, and performance. Trust Power Transmission
            Line Contracting for smart, efficient, and future-ready solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Why Choose Us:</h2>
          <div className="boxschoose">
            <div>
              <h3>Quality Assurance:</h3>
              <p>
                We use only the highest quality materials and state-of-the-art
                technology to ensure long-lasting results
              </p>
            </div>
            <div>
              <h3>Customer-Centered Approach:</h3>
              <p>
                We listen to your needs, provide personalized solutions, and
                ensure your satisfaction every step of the way.
              </p>
            </div>
            <div>
              <h3>Timely Execution:</h3>
              <p>
                We consistently deliver projects on time, maintaining the
                highest standards of quality and safety.
              </p>
            </div>
            <div>
              <h3>Experienced Professionals:</h3>
              <p>
                Our certified experts are equipped to manage complex challenges
                with confidence and precision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
