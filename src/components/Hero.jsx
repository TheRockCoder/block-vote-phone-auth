
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Shield, Lock, Database } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-hex-pattern">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 pointer-events-none"></div>
      <div className="hidden lg:block lg:absolute lg:-right-20 lg:top-1/3 lg:transform lg:-translate-y-1/2">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 blur-3xl"></div>
      </div>
      <div className="hidden lg:block lg:absolute lg:-left-10 lg:bottom-20">
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-brand-blue/10 to-brand-teal/10 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-gradient-to-r from-brand-purple to-brand-blue rounded-full w-8 h-8 p-1.5">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-brand-purple font-semibold">Secure • Transparent • Reliable</h2>
            </div>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Blockchain-Powered</span>
              <span className="block text-brand-purple">Secure Voting</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-xl">
              Experience the most secure and transparent voting system backed by blockchain technology. Your vote matters and is protected with military-grade encryption.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/auth">
                <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 shadow-lg shadow-brand-purple/20">
                  Start Secure Voting
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-purple" />
                <p className="text-sm text-gray-600">End-to-end encryption</p>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-brand-purple" />
                <p className="text-sm text-gray-600">Immutable ledger</p>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-purple" />
                <p className="text-sm text-gray-600">Verified by phone</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden lg:max-w-md animate-float">
              <div className="relative block w-full bg-white rounded-lg">
                {/* Blockchain graphic illustration */}
                <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 shadow-inner">
                  <div className="flex flex-col space-y-4">
                    {[1, 2, 3].map((block) => (
                      <div key={block} className="blockchain-connector relative bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="bg-brand-purple/10 rounded-full p-1.5">
                              <Database className="w-4 h-4 text-brand-purple" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">Block #{block}</span>
                          </div>
                          <div className="bg-green-50 px-2 py-0.5 rounded-full">
                            <span className="text-xs font-medium text-green-600">Verified</span>
                          </div>
                        </div>
                        <div className="mt-2 h-2 bg-gray-100 rounded-full">
                          <div 
                            className="h-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue"
                            style={{ width: `${60 + block * 10}%` }}
                          ></div>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <div className="bg-gray-50 rounded-md px-2 py-1">
                            <span className="text-xs font-mono text-gray-400">0x{Math.random().toString(16).slice(2, 10)}</span>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="w-1 h-1 rounded-full bg-brand-purple/70"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
