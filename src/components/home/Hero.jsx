import Image from "next/image";
import hero from "@/assets/hero.jpeg";
import { FaPlay } from "react-icons/fa";
import bg1 from "@/assets/hero/hero1.svg";
import bg2 from "@/assets/hero/hero2.svg";
import bg3 from "@/assets/hero/hero3.svg";

export default function Hero() {
  return (
    <main
      className="flex flex-col gap-14 items-center justify-center relative z-[0] pt-10 md:pt-20 bg-blend-overlay bg-no-repeat bg-half bg-right-top"
      style={{ backgroundImage: `url(${bg2.src})` }}
    >
      <Image src={bg1} alt="" className="absolute w-2/3 left-0 top-0 h-full z-[-1]" />
      <Image src={bg3} alt="" className="absolute w-1/2 right-0 bottom-0 h-1/3 z-[-1]" />
      <div className="flex flex-col gap-5 md:gap-10 items-center text-center">
        <p className="md:text-xl text-primary">
          MEET THE ONE AND ONLY HITCH AFRICA
        </p>
        <h3 className="text-[64px] text-[#001E1D] font-[800] leading-none">
          The Ultimate Super App
        </h3>
        <button className="px-8 h-12 bg-primary text-white rounded-md">
          Download iOS & Android
        </button>
        <p className="flex gap-3 items-center md:text-xl">
          <FaPlay />
          See how the magic happens
        </p>
      </div>
      <Image src={hero} alt="" />
      <div className="grid grid-cols-4 gap-10 py-10 px-5 md:px-20 text-[#434A54]">
        <nav className="flex flex-col gap-3 font-[800] text-[36px] text-[#0B1621]">
          Hitch Africa | Lifestyle App
        </nav>
        <nav className="flex flex-col gap-3 text-lg md:text-xl">
          <b className="text-[36px] text-[#0B1621] font-[700]">15K+</b>
          <p>15k+ users used Dash for their business today.</p>
        </nav>
        <nav className="flex flex-col gap-3 text-lg md:text-xl">
          <b className="text-[36px] text-[#0B1621] font-[700]">25%</b>
          <p>Decrease expense more than 25%/mo</p>
        </nav>
        <nav className="flex flex-col gap-3 text-lg md:text-xl">
          <b className="text-[36px] text-[#0B1621] font-[700]">60%</b>
          <p>Business revenue increase significantly.</p>
        </nav>
      </div>
    </main>
  );
}
