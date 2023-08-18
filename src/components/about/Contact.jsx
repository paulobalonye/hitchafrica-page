import Image from "next/image";
import feature from "@/assets/contact.jpeg";
import wave from '@/assets/wave-abt.svg'
export default function Contact() {
  return (
    <main
      className="px-3 md:px-20 py-10 md:py-20 flex flex-col gap-5 md:gap-14 z-10 bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${wave.src})` }}
    >
      <div className="w-full flex flex-col md:flex-row justify-evenly gap-8 md:gap-20 items-center z-10">
        <figure className="w-1/3 flex h-full justify-center items-center">
          <Image
            src={feature}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>
        <div className="w-1/3 flex flex-col gap-5 md:gap-14">
          <p className="text-primary">OUR CONTACT</p>
          <h4 className="text-[#0B1621] text-xl md:text-[48px] font-[800] leading-normal">
            Have a question? Our team is happy to assist.
          </h4>
          <p className="text-xl">
            Ask about products, pricing, implementation or anything else.
          </p>
          <button className="rounded-xl bg-primary px-8 h-14 text-white w-full">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}
