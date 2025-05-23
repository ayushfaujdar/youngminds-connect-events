
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I register for events on YoungMinds?",
      answer: "Simply browse our events, click on the one that interests you, and follow the registration process. You'll need to create a free account to register for events and access additional features."
    },
    {
      question: "Are there any fees for using YoungMinds?",
      answer: "Creating an account and browsing events is completely free. Some premium events may have registration fees, which are clearly displayed on each event page. We also offer premium memberships with additional benefits."
    },
    {
      question: "Can I organize my own event through YoungMinds?",
      answer: "Absolutely! YoungMinds welcomes event organizers. You can create an organizer account and list your events on our platform. We provide tools to help you manage registrations, communicate with attendees, and promote your events."
    },
    {
      question: "What types of internship opportunities are available?",
      answer: "We offer a wide range of internship opportunities across various industries including tech, finance, marketing, design, and more. Our internships range from part-time positions to full-time summer programs with leading companies."
    },
    {
      question: "How do you ensure the quality of events and internships?",
      answer: "All events and internship opportunities go through our verification process. We work directly with organizers and companies to ensure authenticity, and we collect feedback from participants to maintain high standards."
    },
    {
      question: "Can I attend virtual events?",
      answer: "Yes! We offer both in-person and virtual events. Virtual events are clearly marked and include all necessary joining information. This allows you to participate regardless of your location."
    },
    {
      question: "How do I connect with other attendees?",
      answer: "Our platform includes networking features that allow you to connect with other attendees before, during, and after events. You can also join community discussions and interest-based groups."
    },
    {
      question: "What support do you provide for event organizers?",
      answer: "We provide comprehensive support including event listing tools, registration management, payment processing, marketing assistance, and analytics. Our team is always available to help organizers succeed."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-on-scroll">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Get answers to common questions about YoungMinds and how to make the most of our platform.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="animate-on-scroll overflow-hidden">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button className="gradient-bg text-white">Contact Support</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
