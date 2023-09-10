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
      question: "Q: How can I sign up as a service provider on Hitch?",
      answer:
        "A: Signing up is easy! Visit our website or download the app, click on the 'Sign Up' button, and follow the simple registration process.",
    },
    {
      question:
        "Q: What types of service providers are welcome on Hitch Africa?",
      answer:
        "A: We welcome a wide range of professionals, including tutors, plumbers, electricians, cleaners, painters, and many more.",
    },
    {
      question: "Q: Is there a fee for joining Hitch as a service provider?",
      answer:
        "A: No, joining Hitch as a service provider is absolutely free. You can create your profile and start offering your services at no cost.",
    },
    {
      question: "Q: How do I set my service rates and availability?",
      answer:
        "A: After signing up, you can set your rates and availability within your profile. You have full control over your pricing and working hours.",
    },
    {
      question: "Q: How do I get paid for my services on Hitch?",
      answer:
        "A: We have a secure payment system in place. Once you complete a job, your earnings are transferred to your Hitch account, and you can withdraw them to your bank account.",
    },
    {
      question:
        "Q: Can I read reviews and ratings from clients before accepting a job?",
      answer:
        "Q: Can I read reviews and ratings from clients before accepting a job?",
    },
    {
      question: "Q: What if I have a dispute with a client?",
      answer:
        "A: We have a support team to assist in resolving disputes. You can contact our support center, and we will work to find a fair solution.",
    },
    {
      question:
        "Q: How can I boost my visibility on Hitch and get more clients?",
      answer:
        "A: Completing your profile with details about your services, experience, and adding high-quality photos can significantly increase your visibility. Positive client reviews also help.",
    },
    {
      question:
        "Q: Is there a limit to the number of jobs I can take on Hitch?",
      answer:
        "A: There's no limit! You can take on as many jobs as you can manage while maintaining the quality of your service.",
    },
    {
      question:
        "Q: What kind of support can I expect from Hitch Africa as a service provider?",
      answer:
        "A: We're committed to your success. Hitch Africa offers support through our dedicated team. Whether you have questions or need assistance, we're here to help you thrive.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 px-5 md:px-20 py-10 md:py-16">
      <div className="bg-[#F6F6F6] rounded p-5 md:p-20 flex flex-col justify-evenly gap-5 md:gap-10 w-full md:w-2/3 mx-auto">
        <b className="text-xl md:text-3xl font-[600] mx-auto">
          Frequently Asked Questions
        </b>
        <div className="flex flex-col gap-3">
          {List.map((info, index) => (
            <nav
              className={`md:px-5 py-4 flex flex-col gap-2 leading-relaxed faq transition ease-in-out duration-1000 h-fit text-text`}
              key={index}
            >
              <div className="relative flex justify-between items-center cursor-pointer text-sm md:text-base">
                <p className="font-[600] text-lg text-primary">{info.question}</p>
              </div>
              <p className={`text-sm md:text-base`}>{info.answer}</p>
            </nav>
          ))}
        </div>
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
    </section>
  );
}
