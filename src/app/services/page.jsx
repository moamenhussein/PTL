import Offer from '@/Components/servicespage/offer/Offer';
import './services.css';
import HeroServices from '@/Components/servicespage/hero/HeroServices';
import CardsBox from '@/Components/servicespage/cards/Cards';
import Cards from '@/Components/services/cards/Cards';
import Work from '@/Components/servicespage/workwithus/Work';
export default function Services() {
  return (
    <section className="services">
      <HeroServices />
      <Offer />
      <CardsBox />
      <Cards />
      <Work />
    </section>
  );
}
