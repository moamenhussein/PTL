import SectionOne from '@/Components/projectDetails/sectionOne';
import '../projectDetails/projectDetails.css';
import './about.css';
import About from '@/Components/about/About';
import Choose from '@/Components/aboutpage/chooseyou/ChooseYou';
import Expertise from '@/Components/aboutpage/expertise/Expertise';
export default function AboutPage() {
  return (
    <>
      <SectionOne heading="About" />
      <About head="We specialize in renewable energy and MEP solutions, serving the UAE since 2008 and expanding to Saudi Arabia in 2023. Our services cover complete electromechanical works with a strong focus on sustainability, safety, and performance." />
      <Choose />
      <Expertise />
    </>
  );
}
