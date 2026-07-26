import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductsCatalog from './components/ProductsCatalog.jsx';
import ShelfSpecBuilder from './components/ShelfSpecBuilder.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import CoverageArea from './components/CoverageArea.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingContact from './components/FloatingContact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductsCatalog />
        <ShelfSpecBuilder />
        <FeaturesSection />
        <CoverageArea />
        <FAQSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
