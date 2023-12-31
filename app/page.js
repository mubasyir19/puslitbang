import { AirQuality, Footer, Footer2, Hero, Navbar, News, Scope, Warning, Weather } from '@/components';

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <Weather />
      <Scope />
      <AirQuality />
      <News />
      <Warning />
      <Footer2 />
    </main>
  );
}
