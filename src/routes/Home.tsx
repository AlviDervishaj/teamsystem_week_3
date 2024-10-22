import { Cta } from '../components/Cta';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
export default function Home() {
  return (
    <section className="container mx-auto space-y-20">
      <Hero />
      <Cta />
      <Features />
    </section>
  );
}
