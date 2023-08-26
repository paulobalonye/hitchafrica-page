"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drop from "@/assets/drop.svg";
import Image from "next/image";
import bg from "@/assets/termsbg.svg";

export default function Privacy() {
  const [activeIndices, setActiveIndices] = useState(new Set());

  const handleButtonClick = (index) => {
    setActiveIndices((prevIndices) => {
      const newIndices = new Set();
      if (!prevIndices.has(index)) {
        newIndices.add(index);
      }
      console.log(index);
      return newIndices;
    });
  };
  const List = [
    {
      question: "Welcome",
      answer:
        "Welcome to Hitch Africa! This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use our services. Please take a moment to read through this policy to understand how we handle your data. By using Hitch Africa, you consent to the practices described herein.",
    },
    {
      question: "INTRODUCTION",
      answer:
        "At Hitch Africa, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your data. It also describes your choices and controls over your information.",
    },
    {
      question: "INFORMATION COLLECTED",
      answer: (
        <div className="flex flex-col gap-3">
          <p>
            We collect various types of information to provide and improve our
            services:
          </p>
          <p>
            <b>1. Personal Information:</b> When you sign up for Hitch Africa,
            we may collect information such as your name, email address, and
            phone number.
          </p>
          <p>
            <b>2. Journey Information:</b> To facilitate ride-sharing, we
            collect data about your travel plans, pickup and drop-off locations,
            and routes.
          </p>
          <p>
            <b>3. Payment Details:</b> We collect payment information to process
            transactions, which may include credit card details or other payment
            methods.
          </p>
          <p>
            <b>4. Device and Usage Information:</b> We gather data about the
            devices you use to access Hitch Africa, as well as information about
            how you interact with our platform.
          </p>
        </div>
      ),
    },
    {
      question: "DATA USAGE AND PURPOSE",
      answer: (
        <div className="flex flex-col gap-3">
          <p>We use the collected information for the following purposes:</p>
          <p>
            <b>1. Providing Services:</b> To offer ride-sharing services, manage
            bookings, and enhance your overall experience.
          </p>
          <p>
            <b>2. Communication:</b> To send you updates, notifications, and
            important information related to your Hitch Africa account and
            journeys.
          </p>
          <p>
            <b>3. Improvement:</b> We use data to analyze user behavior, enhance
            our services, and develop new features.
          </p>
        </div>
      ),
    },
    {
      question: "DATA SHARING",
      answer: (
        <div className="flex flex-col gap-3">
          <p>
            We may share your information under the following circumstances:
          </p>
          <p>
            <b>1. With Drivers and Passengers:</b> Your name, profile picture,
            and journey details are shared with other users participating in the
            same ride.
          </p>
          <p>
            <b>2. Service Providers:</b> We may share information with
            third-party service providers who assist us in delivering our
            services, including payment processing and data analysis.
          </p>
          <p>
            <b>3. Legal Compliance:</b> We may disclose information if required
            by law or to protect our rights, privacy, safety, or property.
          </p>
        </div>
      ),
    },
    {
      question: "DATA SECURITY",
      answer: (
        <div className="flex flex-col gap-3">
          <p>We take measures to ensure the security of your data:</p>
          <p>
            <b>1. Encryption:</b> Your sensitive information is encrypted during
            transmission and storage.
          </p>
          <p>
            <b>2. Access Control:</b> We limit access to your personal data to
            authorized personnel only.
          </p>
          <p>
            <b>3. Regular Assessment:</b> We regularly review and update our
            security practices to protect against unauthorized access.
          </p>
        </div>
      ),
    },
    {
      question: "USER CHOICES AND CONTROL",
      answer: (
        <div className="flex flex-col gap-3">
          <p>
            <b>1. Account Settings:</b> You can update your account information
            and preferences at any time.
          </p>
          <p>
            <b>2. Communication:</b> You can manage your communication
            preferences and opt out of certain notifications.
          </p>
          <p>
            <b>3. Data Deletion:</b> You can request the deletion of your
            account and associated data, subject to legal obligations.
          </p>
        </div>
      ),
    },
    {
      question: "UPDATES TO THE POLICY",
      answer: (
        <div className="flex flex-col gap-3">
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal requirements. We will notify you of any
            material changes via email or through our platform. Continued use of
            Hitch Africa after such changes constitutes your acceptance of the
            updated policy.
          </p>
        </div>
      ),
    },
  ];
  return (
    <main className="flex flex-col items-center">
      <div
        className="w-full flex flex-col relative z-0 bg-cover bg-[top right] bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full md:w-1/2 py-20 mx-auto px-5 flex flex-col gap-5 md:gap-10 justify-center items-center">
          <b className="text-3xl md:text-[40px] font-[700] leading-none text-center text-primary">
            Privacy Policy
          </b>
          <p>Last updated: August 25, 2023</p>
          <div className="flex flex-col justify-evenly w-full gap-5">
            {List.map((info, index) => (
              <nav
                className={`rounded-lg w-full flex flex-col leading-relaxed  transition ease-in-out duration-1000 h-fit text-text ${
                  activeIndices.has(index) ? "gap-3" : ""
                }`}
                key={index}
              >
                <div
                  onClick={() => handleButtonClick(index)}
                  className="relative flex justify-between py-4 border-black border-b items-center cursor-pointer text-sm md:text-base"
                >
                  <p className="">{info.question}</p>
                  <Image
                    alt="drop"
                    src={drop}
                    className={`transition-all ease-in-out duration-700 text-primary h-8 md:h-10 ${
                      activeIndices.has(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndices.has(index) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-clip"
                    >
                      <p className={`text-sm md:text-base`}>
                        {activeIndices.has(index) && info.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            ))}
          </div>
          <p>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at privacy@hitchafrica.com.
          </p>
          <p>
            Thank you for choosing Hitch Africa. Your privacy and trust are
            important to us.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly items-center py-10 md:py-28 bg-primary">
        <b className="text-3xl md:text-[40px] font-[700] text-white">
          Customer Support
        </b>
        <button className="px-14 py-4 text-lg bg-white text-primary rounded-lg font-[600]">
          Contact Us
        </button>
      </div>
    </main>
  );
}
