"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

export default function FAQ() {
  const [activeIndices1, setActiveIndices1] = useState(new Set());

  const handleButtonClick1 = (index) => {
    setActiveIndices1((prevIndices) => {
      const newIndices = new Set();
      if (!prevIndices.has(index)) {
        newIndices.add(index);
      }
      return newIndices;
    });
  };
  const List = [
    {
      question:
        "Q: How can my restaurant/shop join Hitch Africa as a merchant?",
      answer:
        "A: Joining Hitch Africa as a merchant is easy. Simply visit our website, click 'Merchant Sign Up,' and follow the straightforward registration process for restaurants, shops, and other businesses.",
    },
    {
      question:
        "Q: What types of businesses can become Hitch Africa merchants?",
      answer:
        "A: Hitch Africa welcomes a variety of businesses, including restaurants, cafes, shops, grocery stores, and more. If you provide goods or dining services, you can partner with us.",
    },
    {
      question:
        "Q: How can Hitch Africa help my restaurant/shop grow its customer base?",
      answer:
        "A: By partnering with Hitch Africa, your restaurant or shop gains access to a larger customer base. Our platform connects you with local customers who are looking for your products or services.",
    },
    {
      question:
        "Q: Is there a fee to join Hitch Africa as a restaurant/shop merchant?",
      answer:
        "A: Joining Hitch Africa as a restaurant or shop merchant is free. You'll only pay a small service fee when you make a sale through our platform.",
    },
    {
      question:
        "Q: Can I customize my restaurant/shop profile on Hitch Africa?",
      answer:
        "A: Absolutely! You can personalize your restaurant or shop profile with photos, menus, descriptions, and other details to make your offerings more attractive to potential customers.",
    },
    {
      question:
        "Q: How do I manage orders and deliveries through Hitch Africa?",
      answer:
        "A: Our merchant app provides you with powerful tools to manage orders, track deliveries, and communicate with customers. You'll have everything you need to streamline your operations.",
    },
    {
      question:
        "Q: Can I offer special promotions or discounts to attract more customers?",
      answer:
        "A: Yes, you have the flexibility to create and offer special promotions, discounts, and deals to attract and retain customers through our platform.",
    },
    {
      question: "Q: How and when do I receive payments from Hitch Africa?",
      answer:
        "A: You'll receive payments securely through our platform. Payouts are typically processed on a regular schedule to ensure you receive your earnings promptly.",
    },
    {
      question:
        "Q: What kind of support is available to Hitch Africa restaurant/shop merchants?",
      answer:
        "A: We provide dedicated merchant support to assist you with any questions or issues you may encounter. Our support team is here to help you succeed.",
    },
    {
      question:
        "Q: How can I contact Hitch Africa for restaurant/shop merchant-related inquiries?",
      answer:
        "A: If you have any inquiries or need assistance related to your restaurant or shop merchant account, you can reach out to our support team through the app or visit our website for merchant support.",
    },
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center gap-6 md:gap-14 relative px-5 md:px-20 py-8 md:py-14 bg-top bg-cover bg-no-repeat">
      <h3 className="text-xl md:text-[32px] font-[600] text-text">
        Do you have some questions?
      </h3>
      <p>We’ve got some answers for you</p>
      <div className="w-full md:w-2/3 flex flex-col gap-5 md:gap-10">
        {List.map((info, index) => (
          <nav
            className={`w-full px-5 py-4 rounded-[40px] flex flex-col leading-relaxed border border-text transition ease-in-out duration-1000 h-fit text-text ${
              activeIndices1.has(index) ? "gap-3" : ""
            }`}
            key={index}
          >
            <div
              onClick={() => handleButtonClick1(index)}
              className="relative flex justify-between items-center cursor-pointer text-sm md:text-base"
            >
              <p className="">{info.question}</p>
              <span
                className={`min-h-10 h-10 w-10 min-w-10 rounded-[50%] bg-[#F6F6F6] transition-all ease-in-out duration-700  flex justify-center items-center ${
                  activeIndices1.has(index) ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown className={``} />
              </span>
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
      <div className="flex flex-col items-center text-center gap-4">
        <Link
          href="https://onelink.to/hurb2a"
          className="rounded-md px-6 h-12 flex gap-1 justify-center items-center bg-inherit border border-primary text-primary w-fit"
        >
          Sign Up Now <FaGooglePlay className="text-xl" />{" "}
          <FaAppStore className="text-xl" />
        </Link>
        <p>
          Got questions or concerns?{" "}
          <Link href="/contact" className="text-primary inline">
            {" "}
            Contact us.
          </Link>
        </p>
      </div>
    </main>
  );
}
