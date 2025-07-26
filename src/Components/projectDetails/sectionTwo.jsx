'use client';
import { motion } from 'framer-motion';
import imageOne from '../../assets/images/projectDetails/project1.webp';
import Image from 'next/image';
export default function SectionTwo() {
  const projects = [
    {
      id: 1,
      name: 'SAAD Solar PV IPP - 300 MW AC Solar PV Power Plant ',
      project: 'NEOM BAJDAH STUDIO (PV/Diesel) with Battery storage.  ',
      owner: 'NEOM',
      consultant: 'BECHTEL/Fichtner',
      contractor: 'Desert technologies ',
      heading: 'Electromechanical battery storage energy supply system.',
      scopeOfWork: [
        'installation and integration of solar/Diesel generation hybrid system with Battery storage and Vehicle chargers. ',
        'Complete mechanical, Electrical, T&C. ',
      ],
      contractAmount: '3,530,000.00 SR ',
      duration: '3 months (Feb-2025 to May-2025). ',
      status: 'Under construction',
      image: imageOne,
    },
    {
      id: 2,
      name: "SA'AD-2 SOLAR PV INDEPENDENT POWER PLANT ",
      project:
        "SA'AD-2 SOLAR PV INDEPENDENT POWER PLANT - 1,125MW solar PV power project ",
      owner: "SA'AD-2 Energy Company.",
      consultant: 'N/A.',
      contractor:
        'EPCOIII Electric Power Construction and Huadong Engineering (Power China) ',
      heading: 'Mechanical Scope of work:',
      scopeOfWork: [
        'Total of 280 MW Mechanical installation includes: (Next Tracker, Archteck solar tracker, PV module, Cleaning Robot, auxiliary systems). ',
      ],
      contractAmount: '8,625,000.00 SR',
      duration: '8 months (June-2024 to Feb.-2025).',
      status: 'Final handing over in progress. ',
      image: imageOne,
    },
    {
      id: 3,
      name: 'SAAD Solar PV IPP - 300 MW AC Solar PV Power Plant',
      project: 'SAAD Solar PV IPP - 300 MW AC Solar PV Power Plant',
      owner: 'Al-Ghazala Energy Company Limited.',
      consultant: 'OCA',
      contractor: 'ELSEWEDY ELECTRIC FOR TRANSMISSION AND DISTRIBUTION (EET&D)',
      heading: 'Electrical Scope of work:',
      headingTwo: 'Mechanical Scope of work:',
      scopeOfWork: [
        'Total of 170 MW Electrical installation includes:  MVPS transformer station, inverters, combiner boxes, LV-MV termination, string termination, LV-DC & MV-AC cable laying, aux cable laying and termination (FO, RS, Cat-6…etc), PV field grounding System, testing and commissioning (IV curve, insulation resistance, polarity, MV-VLF test. etc.)',
      ],
      scopeOfWorkTwo: [
        'Total of 130 MW Mechanical installation includes: (NX-horizon solar tracker, PV module, Cleaning Robot, Weather stations, NCU).',
      ],
      contractAmount: '11,380,000.00 SR',
      duration: '10 months (Oct-2023 to Aug-2024).',
      status: 'Completed',
      image: imageOne,
    },
    {
      id: 4,
      name:
        'Al Dhafra PV2 Solar Power Plant, Abu Dhabi, UAE (By Transmission Line Electromechanical’ LLC). ',
      project: 'Al Dhafra PV2 Solar Power Plant, Abu Dhabi, UAE',
      owner: 'Dhafrah PV2 Energy Company LLC ',
      consultant: 'Fichtner GmbH & Co. KG ',
      contractor: 'China Machinery Engineering Corporation - CMEC',
      heading: 'Mechanical Scope of work:',
      scopeOfWork: [
        'Total of 400 MW Mechanical installation includes: (Archteck solar tracker, PV module, Cleaning Robot, auxiliary systems).',
      ],
      contractAmount: '19,954,000.00 AED',
      duration: '10 months (June-2022 to Apr.-2023).',
      status: 'Completed',
      image: imageOne,
    },
    {
      id: 5,
      name:
        'Dubai 900MW PV Power Plant - Phase V (Stage A&B) (By Transmission Line Electromechanical’ LLC). ',
      project: 'Dubai 900MW PV Power Plant - Phase V',
      owner: 'Shuaa Energy 3 PV.',
      consultant: 'Shanghai Electric Group Co. Ltd. ',
      contractor:
        'Shanghai Electric Group Co. Ltd./China Energy Engineering Group - ZTPC Co. LTD. ',
      heading: 'Electrical Scope of work:',
      headingTwo: 'Mechanical Scope of work:',
      scopeOfWork: [
        'Total of 130 MW Electrical installation includes:  MVPS transformer station, inverters, combiner boxes, LV-MV termination, string termination, LV-DC & MV-AC cable laying, aux cable laying and termination (FO, RS, Cat-6…etc), PV field grounding System, testing and commissioning (IV curve, insulation resistance, polarity, MV-VLF test. etc.)',
      ],
      scopeOfWorkTwo: [
        'Total of 130 MW Mechanical installation includes: (NX-horizon solar tracker, PV module, Cleaning Robot, Weather stations, NCU). ',
      ],
      contractAmount: '7,650,000.00 AED',
      duration: '14 months (Oct-2020 to Dec.-2021).',
      status: 'Completed',
      image: imageOne,
    },
  ];
  return (
    <section className="projects">
      <div className="container">
        <motion.div
          className="info"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4>Details of latest projects </h4>
          <p>
            PTL has successfully executed a wide range of power transmission
            infrastructure projects, primarily in Saudi Arabia and the United
            Arab Emirates. With expertise in high-voltage transmission lines,
            substations, and electrical infrastructure works, PTL is fully
            capable of handling installation, commissioning, and maintenance
            activities. Our strength lies in our experienced engineering and
            project management teams, supported by skilled technicians,
            electricians, and site supervisors.
          </p>
        </motion.div>
      </div>
      <div className="latestProject">
        <div className="container">
          {projects.map((project) => {
            return (
              <div className="projectContent" key={project.id}>
                <motion.h6
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >{`${project.id} - ${project.name}`}</motion.h6>
                <div className="imageAndInfo grid grid-cols-1 md:grid-cols-2 gap-16">
                  <motion.div
                    className="image"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={project.image} alt="Image" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-center text-1xl md:text-3xl font-bold text-[#f15a24] details"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Details About Project
                    </motion.h3>
                    <motion.div
                      className="info"
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <h3>Project : </h3>
                        <h5>{project.project}</h5>
                      </div>
                      <div>
                        <h3>Owner : </h3>
                        <h5>{project.owner}</h5>
                      </div>
                      <div>
                        <h3>Consultant/OE : </h3>
                        <h5>{project.consultant}</h5>
                      </div>
                      <div>
                        <h3>EPC Contractor : </h3>
                        <h5>{project.contractor}</h5>
                      </div>
                      <div>
                        <h3>Scope of work : </h3>
                        <div className="headingAndUls">
                          <h5 className="head font-bold">{project.heading}</h5>
                          <ul>
                            {project.scopeOfWork.map((scope, index) => (
                              <li key={index}>{scope}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3>Contract Amount : </h3>
                        <h5>{project.contractAmount}</h5>
                      </div>
                      <div>
                        <h3>Duration : </h3>
                        <h5>{project.duration}</h5>
                      </div>
                      <div>
                        <h3>Status : </h3>
                        <h5>{project.status}</h5>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
