import { useState } from "react";

const Faq = () => {
  const faqItems = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework...",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer:
        "You can install Tailwind CSS by following the official installation guide...",
    },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="container py-16 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold text-[#9741D6] text-center">
        FAQ
      </h1>
      <p className="text-center text-lg md:text-2xl mt-5 text-gray-500 md:max-w-4xl mx-auto mb-20">
        Are you ready to embrace the unconventional path or are you gonna just
        settle for conventional results?
      </p>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`mb-4 p-4 max-w-6xl mx-auto border border-[#9741D6] rounded-md ${
            index === activeIndex
              ? " bg-gradient-to-b from-purple-500 to-purple-300 bg-faq"
              : ""
          }`}
        >
          <button
            className="flex items-center justify-between w-full "
            onClick={() => toggleAccordion(index)}
          >
            <h3
              className={`text-lg ${index === activeIndex ? "text-white" : ""}`}
            >
              {item.question}
            </h3>
            <svg
              className={`w-4 h-4 transition-transform duration-300 transform ${
                index === activeIndex ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {index === activeIndex && (
            <div className="text-white">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
