'use client';
import { motion } from 'framer-motion';
import './teammembers.css';
import member1 from '../../../assets/images/team/member1.webp';
import Image from 'next/image';
export default function TeamMembers() {
  const leaders = [
    { id: 1, image: member1, name: 'Mohammed Ahmed', job: 'Team Leader' },
  ];
  const team = [
    { id: 1, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 2, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 3, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 4, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 5, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 6, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 7, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 8, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
    { id: 9, image: member1, name: 'Moamen Hussein', job: 'Engineer' },
  ];
  return (
    <div className="ourteam">
      <section className="teamleaders">
        <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {leaders.map((leader) => {
            return (
              <motion.div
                className="leader"
                key={leader.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1}}
              >
                <Image src={leader.image} alt="Leader Image" />
                <h3>ENG / {leader.name}</h3>
                <h5>{leader.job}</h5>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section className="teammember">
        <div className="container">
          <div className="ourteam grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-center">
            {team.map((member) => {
              return (
                <motion.div
                  className="member"
                  key={member.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <Image src={member.image} alt="Member Image" />
                  <h3>ENG / {member.name}</h3>
                  <h5>{member.job}</h5>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
