import Image from "next/image";
import map from "@/assets/wmap.svg";
export default function Where() {
  return (
    <div className="w-full px-5 md:px-24 py-20 bg-[#C0D1D280] flex flex-col md:flex-row gap-8 md:gap-10 justify-evenly items-center z-10">
      <div className="flex flex-col gap-4 md:gap-8">
        <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
          Where we are ?
        </h4>
        <ul className="flex flex-col gap-4 list-disc px-5">
          <li>Location 1</li>
          <li>Location 2</li>
          <li>Location 3</li>
          <li>Location 4</li>
          <li>Location 5</li>
        </ul>
      </div>
      <figure className="flex justify-center items-center">
        <Image src={map} alt="" className="h-[90vw] md:h-[550px]" />
      </figure>
    </div>
  );
}
