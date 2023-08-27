"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drop from "@/assets/drop.svg";
import Image from "next/image";
export default function Legal() {
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
      question: "INTRODUCTION",
      answer:
        "Welcome to Hitch Africa, a platform that connects riders and drivers to provide convenient and reliable transportation services. This document outlines the legal and compliance aspects of using the Hitch Africa platform. By accessing or using our services, you agree to adhere to the terms and conditions outlined below.",
    },
    {
      question: "DATA PROTECTION AND COMPLIANCE",
      answer:
        "At Hitch Africa, we are committed to safeguarding your personal data and maintaining compliance with relevant data protection laws. We collect, process, and store your information only for the purpose of providing our services. Our Privacy Policy outlines the types of data we collect, how we use it, and your rights in relation to your data.",
    },
    {
      question: "TERMS OF USE",
      answer: (
        <div>
          <p>
            <b>1. Eligibility:</b> Users must meet eligibility criteria to use
            our platform, including legal age and possession of a valid{" "}
            {`driver's`} license.
          </p>
          <p>
            <b>2. Account Creation:</b> Users are responsible for maintaining
            accurate account information and must not share account credentials.
          </p>
          <p>
            <b>3. Service Usage:</b> Users agree to use the platform for lawful
            purposes and to comply with local laws and regulations.
          </p>
          <p>
            <b>4. Payment:</b> Payment terms and methods are outlined in our
            Payment Policy. Users are responsible for any applicable fees or
            charges.
          </p>
          <p>
            <b>5. User Conduct:</b> Users must adhere to our code of conduct,
            respecting others and refraining from harmful or disruptive
            behavior.
          </p>
          <p>
            <b>6. Modification and Termination:</b> Hitch Africa reserves the
            right to modify or terminate services, accounts, or these terms at
            its discretion.
          </p>
        </div>
      ),
    },
    {
      question: "INTELLECTUAL PROPERTY",
      answer:
        "All content and materials on the Hitch Africa platform, including logos, trademarks, and software, are the property of Hitch Africa or its licensors. Users are prohibited from using, copying, or distributing these materials without explicit permission.",
    },
    {
      question: "PROHIBITED ACTIVITIES",
      answer: (
        <div>
          <p>Users are strictly prohibited from:</p>
          <p>
            1. Engaging in fraudulent, illegal, or harmful activities on the
            platform.
          </p>
          <p>2. Misrepresenting identity, information, or intent.</p>
          <p>
            3. Violating the privacy or rights of other users or third parties.
          </p>
          <p>
            4. Interfering with the {`platform's`} functionality, security, or
            integrity.
          </p>
          <p>
            5. Engaging in any activity that violates these terms or applicable
            laws.
          </p>
        </div>
      ),
    },
    {
      question: "LIABILITY AND DISCLAIMERS",
      answer: (
        <div>
          <p>
            1. Use at Your Own Risk: Users use the Hitch Africa platform at
            their own risk. Hitch Africa does not guarantee the accuracy,
            reliability, or availability of services.
          </p>
          <p>
            2. Limitation of Liability: Hitch Africa is not liable for any
            indirect, incidental, consequential, or punitive damages arising
            from platform use.
          </p>
          <p>
            3. Third-Party Services: Hitch Africa may integrate third-party
            services; users acknowledge that these services are subject to their
            own terms and policies.
          </p>
        </div>
      ),
    },
    {
      question: "CONTACT INFORMATION",
      answer: (
        <div>
          <p>
            For any inquiries, concerns, or legal notices related to these
            terms, please contact us at:
          </p>
          <p>- Email: legal@hitchafrica.com</p>
          <p>- Address: Ikeja Lagos</p>
          <p>- Phone: +234-7075-555-4168 +1-440-771-3030</p>
        </div>
      ),
    },
  ];
  return (
    <main className="flex flex-col items-center">
      <div className="w-full flex flex-col relative z-0 bg-cover bg-[top right] bg-no-repeat">
        <div className="w-full md:w-1/2 py-20 mx-auto px-5 flex flex-col gap-5 md:gap-10 justify-center items-center">
          <b className="text-3xl md:text-[40px] font-[700] leading-none text-center text-primary">
            Legal and Compliance{" "}
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
            By using Hitch {`Africa's`} services, you agree to abide by these
            legal and compliance terms. {`It's`} important to review these terms
            periodically, as they may be updated to reflect changes in laws or
            the {`platform's`} operation.
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
