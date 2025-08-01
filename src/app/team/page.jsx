'use client';
import SectionOne from '@/Components/projectDetails/sectionOne';
import './team.css';
import HeadDetails from '@/Components/teampage/headDetails/HeadDetails';
import TeamMembers from '@/Components/teampage/teammembers/TeamMembers';
export default function Team() {
  return (
    <>
      <SectionOne heading="Our Team" />
      <HeadDetails />
      <TeamMembers />
    </>
  );
}
