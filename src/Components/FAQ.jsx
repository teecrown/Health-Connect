import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const faqs = [
  {
    question: "How do I find a nearby clinic or pharmacy?",
    answer:
      "Simply use the search feature on our homepage or click the `Find Care Near You button`. You can filter results by location, service type, or rating. Health Connect uses your current location (with your permission) to show you trusted clinics and pharmacies closest to you.",
  },
  {
    question: "Can I book an appointment directly through Health Connect?",
    answer:
      "Currently, appointment booking is available for select clinics. We’re working on expanding this feature across more healthcare providers.",
  },
  {
    question: "Are the health tips verified by professionals?",
    answer:
      "Yes, all health tips shared on Health Connect are carefully curated and reviewed by qualified healthcare professionals to ensure they are accurate, relevant, and safe. We are committed to providing reliable information you can trust.",
  },
  {
    question: "How long does it take to get a response from a medical expert?",
    answer:
      "You can expect a response from a medical expert within 12 hours of submitting your inquiry. For urgent or emergency concerns, we strongly recommend using the “Find a Clinic” feature to locate the nearest healthcare center for immediate assistance.",
  },
  {
    question: "Is Health Connect free to use?",
    answer:
      "Yes, Health Connect is completely free to use. You can search for healthcare providers, access verified health tips, and consult with medical experts without any charges. Some external services, like clinic appointments, may have their own fees.",
  },
  {
    question: "How do I leave a review for a healthcare provider?",
    answer:
      "After visiting a clinic or pharmacy listed on Health Connect, simply go to their profile and click on “Leave a Review.” You’ll be able to rate your experience and share helpful feedback for other users.",
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
              <div className="mt-3 text-black-300 text-[20px] font-bold leading-[35px]">
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
