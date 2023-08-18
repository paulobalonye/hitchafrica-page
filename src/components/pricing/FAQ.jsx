"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
export default function FAQ() {
  const [activeIndices1, setActiveIndices1] = useState(new Set());

  const handleButtonClick1 = (index) => {
    setActiveIndices1((prevIndices) => {
      const newIndices = new Set();
      if (!prevIndices.has(index)) {
        newIndices.add(index);
      }
      console.log(index);
      return newIndices;
    });
  };
  const [activeIndices2, setActiveIndices2] = useState(new Set());

  const handleButtonClick2 = (index) => {
    setActiveIndices2((prevIndices) => {
      const newIndices = new Set();
      if (!prevIndices.has(index)) {
        newIndices.add(index);
      }
      console.log(index);
      return newIndices;
    });
  };
  const List1 = [
    {
      question: "How much does it cost me to set up an online store ecommerce?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },

    {
      question:
        "Do I need to understand programming languages to create a professional online store?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },

    {
      question: "Why should I buy credits from within the platform?",
      answer:
        "lorems ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },

    {
      question: "Do I need to add a feature or service to the platform?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },

    {
      question: "Is my store protected?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },
  ];
  const List2 = [
    {
      question: "How many products, visitors, domains are allowed in my store?",
      answer:
        "lorems ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },
    {
      question: "How will our platform maximize your sales?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },
    {
      question: `What if I open my store and I don't use it?`,
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },
    {
      question: "How do I build a successful online store?",
      answer:
        "lorems ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },
    {
      question: "Need customer support?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem. Nullam auctor, nisl eget ultricies aliquam, nunc sapien pharetra nisl, eget luctus diam urna vitae lorem.",
    },
  ];
  return (
    <main>
      <section
        id="faq"
        className="flex flex-col gap-10 px-5 md:px-20 py-10 md:py-16 relative"
      >
        <h3 className="text-xl md:text-[34px] font-[600] text-secondary">
          Frequently asked questions
        </h3>
        <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-10">
          <div className="flex flex-col justify-evenly gap-5 md:gap-10">
            {List1.map((info, index) => (
              <nav
                className={`px-5 py-4 rounded-lg flex flex-col leading-relaxed faq transition ease-in-out duration-1000 h-fit text-text ${
                  activeIndices1.has(index) ? "gap-3" : ""
                }`}
                key={index}
              >
                <div
                  onClick={() => handleButtonClick1(index)}
                  className="relative flex justify-between items-center cursor-pointer text-sm md:text-base"
                >
                  <p className="">{info.question}</p>
                  <FaPlus
                    className={`transition-all ease-in-out duration-700 text-primary ${
                      activeIndices1.has(index) ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndices1.has(index) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-clip"
                    >
                      <p className={`text-sm md:text-base`}>
                        {activeIndices1.has(index) && info.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            ))}
          </div>
          <div className="flex flex-col justify-evenly gap-5 md:gap-10">
            {List2.map((info, index) => (
              <nav
                className={`px-5 py-4 rounded-lg flex flex-col leading-relaxed faq transition ease-in-out duration-1000 h-fit text-text ${
                  activeIndices2.has(index) ? "gap-3" : ""
                }`}
                key={index}
              >
                <div
                  onClick={() => handleButtonClick2(index)}
                  className="relative flex justify-between items-center cursor-pointer text-sm md:text-base"
                >
                  <p className="">{info.question}</p>
                  <FaPlus
                    className={`transition-all ease-in-out duration-700 text-primary ${
                      activeIndices2.has(index) ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndices2.has(index) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-clip"
                    >
                      <p className={`text-sm md:text-base`}>
                        {activeIndices2.has(index) && info.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
