
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield } from 'lucide-react';

const Vote = () => {
  const { toast } = useToast();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const candidates = [
    { id: 1, name: "Candidate A", party: "Progressive Party", votes: 156 },
    { id: 2, name: "Candidate B", party: "Conservative Union", votes: 142 },
    { id: 3, name: "Candidate C", party: "Central Alliance", votes: 104 },
    { id: 4, name: "Candidate D", party: "Reform Movement", votes: 89 },
  ];

  useEffect(() => {
    let timer;
    if (isSubmitting && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isSubmitting && countdown === 0) {
      setIsSubmitting(false);
      setHasVoted(true);
      
      toast({
        title: "Vote Recorded Successfully",
        description: "Your vote has been securely recorded on the blockchain.",
      });
    }
    
    return () => clearTimeout(timer);
  }, [isSubmitting, countdown, toast]);

  const handleVoteSubmit = () => {
    if (!selectedCandidate) {
      toast({
        variant: "destructive",
        title: "No Selection",
        description: "Please select a candidate before submitting your vote.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    toast({
      title: "Recording Vote",
      description: "Your vote is being securely recorded on the blockchain...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={true} />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {!hasVoted ? (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900">Cast Your Vote</h1>
                <p className="mt-2 text-gray-600">
                  Select your preferred candidate and submit your secure vote
                </p>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-5 w-5 text-brand-purple" />
                  <h2 className="text-lg font-medium text-gray-900">Voting Information</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Your vote will be securely recorded on our blockchain network, making it tamper-proof and verifiable.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Important:</strong> You can only vote once. Your selection cannot be changed after submission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {candidates.map((candidate) => (
                  <Card 
                    key={candidate.id}
                    className={`cursor-pointer transition-all ${
                      selectedCandidate === candidate.id 
                      ? 'ring-2 ring-brand-purple border-brand-purple/40' 
                      : 'hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedCandidate(candidate.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">{candidate.name}</h3>
                          <p className="text-sm text-gray-500">{candidate.party}</p>
                        </div>
                        {selectedCandidate === candidate.id && (
                          <div className="h-6 w-6 rounded-full bg-brand-purple flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleVoteSubmit}
                  disabled={isSubmitting || !selectedCandidate}
                  className="px-8 py-6 text-lg bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90"
                >
                  {isSubmitting ? `Confirming Vote (${countdown})...` : 'Submit Your Vote'}
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-4 mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Vote Successfully Recorded</h1>
              <p className="mt-4 text-gray-600 max-w-md mx-auto">
                Your vote has been securely recorded on the blockchain. Thank you for participating in this democratic process.
              </p>
              <div className="mt-6 bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Your Receipt</h2>
                <p className="text-sm text-gray-500 mb-2">Vote ID: vt_{Math.random().toString(36).substring(2, 10)}</p>
                <p className="text-sm text-gray-500 mb-2">Timestamp: {new Date().toLocaleString()}</p>
                <p className="text-sm text-gray-500">
                  Block Hash: 0x{Math.random().toString(16).substring(2, 42)}
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => window.location.href = '/results'}
                  className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90"
                >
                  View Live Results
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vote;
