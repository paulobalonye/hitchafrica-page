import Image from "next/image";
import hero from "@/assets/hero-abt2.svg";
import fline from "@/assets/aline.svg";
import bg from "@/assets/hero-abt.jpeg";
import abt1 from "@/assets/abt/abt1.jpg";
import abt2 from "@/assets/abt/abt2.jpg";
import abt3 from "@/assets/abt/abt3.jpg";
import abt4 from "@/assets/abt/abt4.jpg";
import abt5 from "@/assets/abt/abt5.jpg";

export default function Hero() {
  return (
    <div className="relative px-5 md:min-h-screen w-full flex flex-col gap-5 md:gap-10 items-center">
      <div className="w-full flex flex-col items-center text-center gap-4 md:gap-6 py-10 md:py-16">
        <h4 className="text-[32px] md:text-[64px] font-[800] leading-none text-dark">
          About Us
        </h4>
        <p className="text-lg font-[600]">This is the story about us.</p>
      </div>
      {/* <div className="w-full flex flex-col md:grid grid-cols-[1fr_2fr_1fr] gap-4">
        <Image src={abt1} alt="" className="w-full h-full object-cover" />
        <div className="flex flex-col gap-4">
          <Image src={abt2} alt="" className="w-full h-full object-cover" />
          <div className="w-full grid grid-cols-2 gap-4">
            <Image src={abt3} alt="" className="w-full h-full object-cover" />
            <Image src={abt4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <Image src={abt5} alt="" className="w-full h-full object-cover" />
      </div> */}
    </div>
  );
}
