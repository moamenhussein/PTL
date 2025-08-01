import About from '@/Components/about/About';
import Hero from '@/Components/hero/Hero';
import HowWork from '@/Components/howwork/HowWork';
import Projects from '@/Components/projects/Projects';
import Services from '@/Components/services/Services';
import SwiperClients from '@/Components/swiper/Swiper';
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <HowWork />
      <SwiperClients />
    </>
  );
}
