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
        'The following terms and conditions govern all use of the www.zeetomic.com website and all content, services and products available at or through the website (taken together, the Website). The Website is owned and operated by Zeetomic, Inc. ("Zeetomic"). The Website is offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, Zeetomic\'s Privacy Policy) and procedures that may be published from time to time on this Site by Zeetomic (collectively, the "Agreement").',
    },
    {
      question: "DATA PROTECTION AND COMPLIANCE",
      answer:
        " is committed to protecting the privacy of its users. We have prepared a Privacy Policy to describe to you our practices regarding the personal information we collect from users of our website. You can find our Privacy Policy at https://zeetomic.com/privacy-policy/.",
    },
    {
      question: 'TERMS OF USE',
      answer:
        "By accessing or using the Website, you are agreeing to these Terms and entering into a legally binding contract with Zeetomic, Inc. Do not access or use the Website if you are unwilling or unable to be bound by the Terms.",
    },
    {
      question: "INTELLECTUAL PROPERTY",
      answer:
        "The Website and its original content, features and functionality are owned by Zeetomic, Inc. and are protected by international copyright.",
    },
    {
      question: "PROHIBITED ACTIVITIES",
      answer:
        "You may not access or use the Website for any purpose other than that for which we make the Website available. The Website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
    },
    {
      question: "LIABILITY AND DISCLAIMERS",
      answer:
        "The Website is provided on an 'as is' basis. To the fullest extent permitted by law, Zeetomic, Inc. makes no representations or warranties of any kind, express or implied, regarding the use or the results of this Website in terms of its correctness, accuracy, reliability, or otherwise. Zeetomic, Inc. shall have no liability for any interruptions in the use of this Website. Zeetomic, Inc. disclaims all warranties with regard to the information provided, including the implied warranties of merchantability and fitness for a particular purpose, and non-infringement.",
    },
    {
      question: "CONTACT INFORMATION",
      answer:
        "If you have any questions about these Terms, please contact us at "
    }
  ];
  return (
    <main className="flex flex-col items-center">
      <div
        className="w-full flex flex-col relative z-0 bg-cover bg-[top right] bg-no-repeat"
      >
        <div className="w-1/2 py-20 mx-auto px-5 flex flex-col gap-10 justify-center items-center">
          <b className="text-[40px] font-[700] leading-none">
            Legal and Compliance{" "}
          </b>
          <p>as of 08 August 2020</p>
          <div className="flex flex-col justify-evenly w-full gap-5">
            {List.map((info, index) => (
              <nav
                className={`px-5 rounded-lg w-full flex flex-col leading-relaxed  transition ease-in-out duration-1000 h-fit text-text ${
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
                    className={`transition-all ease-in-out duration-700 text-primary ${
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
        </div>
      </div>
      <div className="w-full flex justify-evenly items-center py-28 px-5 bg-primary">
        <b className="text-[40px] font-[700] text-white">Customer Support</b>
        <button className="px-14 py-4 text-lg bg-white text-primary rounded-lg font-[600]">
          Contact Us
        </button>
      </div>
    </main>
  );
}
