import Image from "next/image";
import hero from "@/assets/hero-services.svg";
import fline from "@/assets/fline.svg";
import bg from "@/assets/herobg-service.svg";
export default function Hero() {
  return (
    <div className="relative px-5 md:px-24 rounded-bl-[100px] md:rounded-bl-[200px] text-white bg-primary w-full py-10 flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-[0]">
      <Image
        src={fline}
        alt=""
        className="absolute w-full h-full  top-0 left-0 z-[-1]"
      />
      <Image
        src={bg}
        alt=""
        className="absolute w-full h-full  top-0 left-0 z-[-2]"
      />
      <div className="w-full flex flex-col gap-4 md:gap-8 md:py-20">
        <h4 className="text-3xl md:text-[56px] font-[700] leading-normal">
          Discover Seamless Convenience and Quality Service with Hitch Africa
        </h4>
        <p className="md:text-2xl">
          With Hitch Africa, you can now access a comprehensive range of services at
          your fingertips, ensuring efficiency, comfort, and unmatched
          convenience. {`Let's`} simplify your life together!
        </p>
        <button className="text-primary bg-[#FFFFFFDE] h-12 px-5 w-fit mx-auto rounded-md flex justify-center items-center ">
          Learn More
        </button>
      </div>
      <figure className="w-full flex justify-center items-end">
        <Image src={hero} alt="" className="h-[60vw] md:h-[90%] object-cover md:object-contain" />
      </figure>
    </div>
  );
}
