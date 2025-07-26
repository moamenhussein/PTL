import About from '@/Components/about/About';
import Clients from '@/Components/clients/Clients';
import Hero from '@/Components/hero/Hero';
import Projects from '@/Components/projects/Projects';
import Services from '@/Components/services/Services';
export default function Home() {
  return (
    <>
      <Hero />
      <About /> /
      <Services />
      <Projects />
      {/* <Clients />  */}
    </>
  );
}
