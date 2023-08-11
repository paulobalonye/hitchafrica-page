import Image from "next/image";
import underscore from "@/assets/underscore.svg";
import { MyCarousel } from "./Carousel";
export default function Solutions() {
  return (
    <main className="px-3 md:px-24 py-10 md:py-24 flex flex-col gap-5 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          Services
        </h3>
        <Image src={underscore} alt="" className="w-2/3 md:w-[unset]" />
      </div>
      <div className="w-full">
        <MyCarousel />
      </div>
    </main>
  );
}
