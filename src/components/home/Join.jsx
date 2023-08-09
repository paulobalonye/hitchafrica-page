import join from "@/assets/join.svg";
import curl from "@/assets/curl.svg";
import Image from "next/image";
export default function Join() {
  return (
    <main className="bg-primary py-10 px-3 md:px-24 text-white z-10">
      <div className="w-full flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <div className="w-full flex flex-col gap-4 md:gap-8 relative">
          <Image src={curl} alt="" className="hidden md:block absolute right-10 top-1/3" />
          <h5 className="md:text-lg">JOIN US</h5>
          <h4 className="text-xl md:text-[46px] font-[700] leading-normal">
            Become a Merchant or Service Provider
          </h4>
          <button className="px-4 md:px-8 h-10 md:h-12 md:text-lg font-[600] text-primary w-fit bg-[#F0F9F5] rounded-md">
            Become a Restaurant Partner
          </button>
          <button className="px-4 md:px-8 h-10 md:h-12 md:text-lg font-[600] text-primary w-fit bg-[#F0F9F5] rounded-md">
            Become a Service Provider
          </button>
          <button className="px-4 md:px-8 h-10 md:h-12 md:text-lg font-[600] text-primary w-fit bg-[#F0F9F5] rounded-md">
            Become a Driver
          </button>
        </div>
        <figure className="w-full flex justify-center items-center">
          <Image src={join} alt="" className="h-[90vw] md:h-[450px]" />
        </figure>
      </div>
    </main>
  );
}
