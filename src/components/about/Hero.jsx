import Image from "next/image";
import abt1 from "@/assets/hero-abt2.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative px-5 md:px-20 py-10 w-full flex flex-col md:grid grid-cols-2 gap-5 md:gap-10 items-center">
      <div className="w-full flex flex-col gap-4 md:gap-6 py-10 md:py-16">
        <h4 className="text-[32px] md:text-[64px] font-[800] leading-normal text-dark">
          Navigating the Roads of Tomorrow
        </h4>
        <p className="text-lg md:text-2xl font-[600]">
          Discover the story behind Hitch {`Africa's`} journey to redefine urban
          mobility and commerce.
        </p>
        <Link
        href="/product"
        className="flex justify-center items-center h-12 bg-primary text-white rounded-md px-5 min-w-fit w-fit"
      >
        Explore Our Products
      </Link>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-1">
        <Image src={abt1} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
