import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const faqs = [
  {
    question: "How do I find a nearby clinic or pharmacy?",
    answer:
      "You can use the location-based search feature in the Health Connect app or website to find verified clinics and pharmacies near you.",
  },
  {
    question: "Can I book an appointment directly through Health Connect?",
    answer:
      "Currently, appointment booking is available for select clinics. We’re working on expanding this feature across more healthcare providers.",
  },
  {
    question: "Are the health tips verified by professionals?",
    answer:
      "Yes. All health tips on Health Connect are reviewed by certified medical professionals to ensure accuracy and reliability.",
  },
  {
    question: "How long does it take to get a response from a medical expert?",
    answer:
      "On average, expert responses are provided within 12 hours, depending on your query and specialist availability.",
  },
  {
    question: "Is Health Connect free to use?",
    answer:
      "Yes, the platform is free to access. Some advanced features may require a subscription in the future.",
  },
  {
    question: "How do I leave a review for a healthcare provider?",
    answer:
      "After a visit, you'll be prompted to review the provider. You can also find the provider's profile and click 'Write a Review'.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f1f1f1] px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#ffffff] rounded-xl px-4 py-4 shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-3 text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
