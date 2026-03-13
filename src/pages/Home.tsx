import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Architecture } from '@/components/Architecture';
import { UseCases } from '@/components/UseCases';
import { WaitlistCTA } from '@/components/WaitlistCTA';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Architecture />
      <UseCases />
      <WaitlistCTA />
    </>
  );
}
