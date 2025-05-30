import CTA from './CTA';
import Features from './Features';
import Hero from './Hero';
import Quote from './Quote';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <Features />
      <Quote />
      <CTA />
    </main>
  );
}
