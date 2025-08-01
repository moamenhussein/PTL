import HeadingNotFound from '@/Components/notfoundpage/headingnotfound/HeadingNotFound';
import './notfound.css';
import Error from '@/Components/notfoundpage/error/Error';
export default function NotFound() {
  return (
    <section className="notfound">
      <HeadingNotFound />
      <Error />
    </section>
  );
}
