import Link from "next/link";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

export default function Faq() {
  const List = [
    {
      question: "Q: Can I use Hitch Africa for just a few hours a week?",
      answer:
        "A: Yes, you can! Hitch Africa offers flexible driving options, so you can choose to drive whenever it suits your schedule, whether it's a few hours a week or more.",
    },
    {
      question: "Q: What are the requirements to become a Hitch Africa driver?",
      answer:
        "A: To become a Hitch Africa driver, you'll need a valid driver's license, a registered vehicle, and meet our eligibility criteria. Sign up to learn more.",
    },
    {
      question: "Q: How do I sign up as a driver?",
      answer:
        "A: Signing up as a driver is easy! Visit our website, click on the 'Driver Sign Up' button, and follow the simple registration process. It only takes a few minutes.",
    },
    {
      question: "Q: What kind of vehicles are eligible for Hitch Africa?",
      answer:
        "A: We accept a range of vehicle types, including cars, bikes, and more. Your vehicle must meet our safety and eligibility requirements.",
    },
    {
      question: "Q: How do I accept ride requests?",
      answer:
        "A: Once you're signed up as a driver, you'll receive ride requests through our app. Simply accept the ones you're available for, and you're ready to go!",
    },
    {
      question: "Q: Can I drive for Hitch Africa in multiple cities?",
      answer:
        "A: Yes, you can! Hitch Africa operates in multiple cities, allowing you to drive in different locations if you wish.",
    },
    {
      question: "Q: How do I get paid as a driver?",
      answer:
        "A: You'll receive earnings directly through our platform. Payments are secure and hassle-free.",
    },
    {
      question: "Q: Is there a rating system for drivers?",
      answer:
        "A: Yes, passengers can rate their experience with drivers, and drivers can also rate passengers. Maintaining a good rating is essential for both parties.",
    },
    {
      question: "Q: What support is available for drivers?",
      answer:
        "A: We provide 24/7 customer support to assist you with any questions or issues. You can reach out to us anytime you need help.",
    },
    {
      question:
        "Q: How can I contact Hitch Africa for driver-related inquiries?",
      answer:
        "A: You can contact our support team through the app or visit our website for driver support. We're here to assist you every step of the way.",
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
