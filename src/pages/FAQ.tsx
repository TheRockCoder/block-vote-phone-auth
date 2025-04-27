
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does BlockVote ensure vote security?",
      answer: "BlockVote uses multiple layers of security including end-to-end encryption, multi-factor authentication, and immutable record keeping. Each vote is encrypted and verified through our secure system."
    },
    {
      question: "Can I vote from my mobile device?",
      answer: "Yes! BlockVote is fully responsive and works on any device. You can cast your vote securely from your smartphone, tablet, or computer."
    },
    {
      question: "How do I verify my identity?",
      answer: "We use a combination of phone verification and optional Aadhaar verification to ensure each voter's identity. This multi-step process helps prevent fraud while maintaining accessibility."
    },
    {
      question: "Is my vote really anonymous?",
      answer: "Absolutely. While we verify voter identity to prevent fraud, the actual voting process is completely anonymous. Your identity is separated from your vote once verification is complete."
    },
    {
      question: "What happens if I lose internet connection while voting?",
      answer: "Don't worry! BlockVote saves your progress and will resume where you left off once you're back online. Your vote won't be counted until you've completed the entire process."
    },
    {
      question: "Can I change my vote after submitting?",
      answer: "Once a vote is submitted and confirmed, it cannot be changed. This helps maintain the integrity of the voting process. Make sure to review your choices before final submission."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userAuthenticated={false} />
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about BlockVote
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
