import HeadingContact from '@/Components/contactpage/headingcontact/HeadingContact';
import './contact.css';
import Touch from '@/Components/contactpage/touch/Touch';
export default function Contact() {
  return (
    <section className="contact">
      <HeadingContact />
      <Touch />
    </section>
  );
}
