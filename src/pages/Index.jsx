
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SecurityInfo from '../components/SecurityInfo';
import Footer from '../components/Footer';

const Index = () => {
  // In a real app, this would be managed with actual authentication state
  const userAuthenticated = false; 

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={userAuthenticated} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SecurityInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
