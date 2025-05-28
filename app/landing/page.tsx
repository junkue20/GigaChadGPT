import Hero from '@/app/landing/Hero';
import Features from '@/app/landing/Features';
import Quote from '@/app/landing/Quote';
import CTA from '@/app/landing/CTA';

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
