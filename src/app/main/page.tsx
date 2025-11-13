'use client';

import Navbar from '@/components/main-site/Navbar';
import MobileNav from '@/components/main-site/MobileNav';
import Hero from '@/components/main-site/Hero';
import Projects from '@/components/main-site/Projects';
import About from '@/components/main-site/About';
import Services from '@/components/main-site/Services';
import Contact from '@/components/main-site/Contact';
import Footer from '@/components/main-site/Footer';

export default function MainPage() {
  return (
    <div className="relative">
      {/* Navbar - Fixed on the left side (desktop only) */}
      <Navbar />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
