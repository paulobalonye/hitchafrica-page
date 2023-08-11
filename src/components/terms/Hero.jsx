import Image from "next/image";
import hero from "@/assets/hero-terms.svg";
import fline from "@/assets/cline.svg";
export default function Hero() {
  return (
    <div className="relative px-5 md:px-24 py-10 md:py-16 rounded-bl-[200px] text-white bg-primary w-full flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-[0]">
      <Image
        src={fline}
        alt=""
        className="absolute w-full h-full  top-0 left-0 z-[-1]"
      />
      <div className="w-full flex flex-col gap-4 md:gap-8">
        <h4 className="text-xl md:text-[56px] font-[700] leading-normal">
          Contact Us
        </h4>
      </div>
      <figure className="w-full h-full flex flex-col gap-5 justify-center items-center">
        <Image
          src={hero}
          alt=""
          className="h-[90vw] md:h-[unset] object-contain"
        />
      </figure>
    </div>
  );
}
