
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Shield, Lock, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={false} />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                About BlockVote
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionizing digital democracy through secure, transparent, and accessible voting solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At BlockVote, we're committed to making digital voting accessible, secure, and transparent. 
                  Our platform combines cutting-edge technology with user-friendly design to ensure every vote counts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-brand-purple" />
                    <span className="text-gray-700">Military-grade security protocols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-brand-purple" />
                    <span className="text-gray-700">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-6 w-6 text-brand-purple" />
                    <span className="text-gray-700">Verified user authentication</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Person using BlockVote platform"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
