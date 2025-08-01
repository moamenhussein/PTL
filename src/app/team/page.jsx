'use client';
import SectionOne from '@/Components/projectDetails/sectionOne';
import './team.css';
import HeadDetails from '@/Components/teampage/headDetails/HeadDetails';
import TeamMembers from '@/Components/teampage/teammembers/TeamMembers';
import HeadingTeam from '@/Components/teamComponent/HeadingTeam';
export default function Team() {
  return (
    <>
      {/* <SectionOne heading="Our Team" /> */}
      <HeadingTeam />
      <HeadDetails />
      <TeamMembers />
    </>
  );
}
