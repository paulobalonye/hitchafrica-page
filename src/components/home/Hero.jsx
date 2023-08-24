import Image from "next/image";
import hero from "@/assets/hero.jpeg";
import { FaPlay } from "react-icons/fa";
import bg1 from "@/assets/hero/hero1.svg";
import bg2 from "@/assets/hero/hero2.svg";
import bg3 from "@/assets/hero/hero3.svg";
import Link from "next/link";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";
export default function Hero() {
  return (
    <main
      className="flex flex-col gap-14 items-center justify-center relative z-[0] px-5 pt-10 md:pt-20 bg-blend-overlay bg-no-repeat bg-cover md:bg-half bg-right-top"
      style={{ backgroundImage: `url(${bg2.src})` }}
    >
      <Image
        src={bg1}
        alt=""
        className="absolute md:w-2/3 left-0 top-0 h-full z-[-1]"
      />
      <Image
        src={bg3}
        alt=""
        className="absolute md:w-1/2 right-0 bottom-0 h-1/3 z-[-1]"
      />
      <div className="flex flex-col gap-5 md:gap-10 items-center text-center">
        <p className="md:text-xl text-primary">
          MEET THE ONE AND ONLY HITCH AFRICA
        </p>
        <h3 className="text-[32px] md:text-[64px] text-[#001E1D] font-[800] leading-normal">
          3 countries. 40+ products. <br className="hidden md:block" /> 1
          leading on-demand platform
        </h3>
        <nav className="grid grid-cols-2 md:flex gap-4 items-center">
          <Link href="https://onelink.to/9f7vr6">
            <Image src={playstore} alt="" />
          </Link>
          <Link href="https://onelink.to/9f7vr6">
            <Image src={appstore} alt="" />
          </Link>
        </nav>
        <p className="flex gap-3 items-center md:text-xl">
          {/* <FaPlay /> */}
          <span>
            Connecting Journeys, Delivering Convenience: Hitch Africa{" "}
            <br className="hidden md:block" /> - Your All-in-One Service
            Companion
          </span>
        </p>
      </div>
      <Image src={hero} alt="" />
      <div className="flex flex-col md:grid grid-cols-4 gap-10 py-10 text-[#434A54] px-5 md:px-20 ">
        <nav className="flex flex-col gap-3 font-[800] text-[32px] md:text-[36px] text-[#0B1621]">
          Hitch Africa | Lifestyle App
        </nav>
        <nav className="flex flex-col gap-3 text-lg md:text-xl">
          <b className="text-[32px] md:text-[36px] text-[#0B1621] font-[700]">
            1M+ Happy Riders
          </b>
          <p>Join our ever-growing rider community.</p>
        </nav>
        <nav className="flex flex-col gap-3 text-lg md:text-xl">
          <b className="text-[32px] md:text-[36px] text-[#0B1621] font-[700]">
            5K+ Deliveries
          </b>
          <p>Timely, reliable package and food delivery.</p>
        </nav>
        <nav className="flex flex-col gap-3 text-lg md:text-xl">
          <b className="text-[32px] md:text-[36px] text-[#0B1621] font-[700]">
            1K+ Pros
          </b>
          <p>Choose from a wide range of trusted service providers.</p>
        </nav>
      </div>
    </main>
  );
}
