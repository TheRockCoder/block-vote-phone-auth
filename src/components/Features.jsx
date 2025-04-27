
import React from 'react';
import { Shield, Lock, Database, Phone, ChartBar, UserCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-brand-purple" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Your vote is secured with the same technology that protects cryptocurrency transactions worth millions of dollars.',
    },
    {
      icon: Phone,
      title: 'Phone Verification',
      description: 'Multi-factor authentication via SMS ensures that each voter is verified and unique.',
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted from the moment you cast your vote until it\'s recorded on the blockchain.',
    },
    {
      icon: UserCheck,
      title: 'Optional Aadhaar Verification',
      description: 'Add an extra layer of identity verification to further secure the voting process.',
    },
    {
      icon: Database,
      title: 'Immutable Records',
      description: 'Once recorded, votes cannot be altered or deleted, ensuring complete transparency and trust.',
    },
    {
      icon: ChartBar,
      title: 'Real-Time Analytics',
      description: 'Watch live voting results with secure, tamper-proof vote counting and visualization.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Secure Voting Made Simple
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our blockchain-powered voting platform combines cutting-edge security with an easy-to-use interface
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
