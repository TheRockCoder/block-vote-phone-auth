
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={false} />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Understanding Digital Voting
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how BlockVote is transforming the future of democracy through secure and accessible digital voting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Secure Voting Technology"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-purple pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">1. Identity Verification</h3>
                    <p className="text-gray-600 mt-2">Secure authentication using phone verification and optional Aadhaar integration.</p>
                  </div>
                  <div className="border-l-4 border-brand-purple pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">2. Secure Voting</h3>
                    <p className="text-gray-600 mt-2">End-to-end encrypted voting process ensures your vote remains confidential.</p>
                  </div>
                  <div className="border-l-4 border-brand-purple pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">3. Vote Recording</h3>
                    <p className="text-gray-600 mt-2">Your vote is securely recorded and protected from tampering.</p>
                  </div>
                  <div className="border-l-4 border-brand-purple pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">4. Result Verification</h3>
                    <p className="text-gray-600 mt-2">Real-time results with complete transparency and auditability.</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/auth">
                    <Button className="bg-gradient-to-r from-brand-purple to-brand-blue text-white px-8 py-6">
                      Start Voting Now
                    </Button>
                  </Link>
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

export default LearnMore;
