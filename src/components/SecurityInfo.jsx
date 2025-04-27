
import React from 'react';
import { Shield } from 'lucide-react';

const SecurityInfo = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-brand-purple/10 p-2 mb-4">
            <Shield className="h-6 w-6 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transparency & Security
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to maintaining the integrity of every vote through cutting-edge technology and transparent processes
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Protect Your Vote</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                1
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Identity Verification</h4>
                <p className="mt-1 text-gray-600">
                  Our multi-step verification process includes phone authentication and optional Aadhaar verification to prevent fraud and ensure one person, one vote.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                2
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Blockchain Technology</h4>
                <p className="mt-1 text-gray-600">
                  Each vote is cryptographically sealed and added to an immutable blockchain, making it impossible for votes to be altered or deleted once recorded.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                3
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">End-to-End Encryption</h4>
                <p className="mt-1 text-gray-600">
                  Your vote data is encrypted from the moment you submit until it's counted, ensuring complete confidentiality and integrity.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
                4
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Auditable Results</h4>
                <p className="mt-1 text-gray-600">
                  Our transparent system allows for independent verification of results without compromising voter privacy, ensuring trust in the outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-purple/5 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Independent Security Audits</h3>
              <p className="mt-2 text-gray-600">
                Our system undergoes regular security audits by independent cybersecurity experts to ensure the highest standards of protection.
              </p>
            </div>
            <a 
              href="#security-report" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-purple bg-white shadow-sm hover:bg-gray-50"
            >
              View Security Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityInfo;
