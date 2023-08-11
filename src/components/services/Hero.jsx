import Image from "next/image";
import hero from "@/assets/hero-services.svg";
import fline from "@/assets/fline.svg";
import bg from "@/assets/herobg-service.svg";
export default function Hero() {
  return (
    <div className="relative px-5 md:px-24 md:min-h-[90vh] bg-primary text-white w-full flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
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
      <div className="w-full flex flex-col gap-4 md:gap-8 py-24">
        <h4 className="text-xl md:text-[56px] font-[700] leading-normal">
          Discover Seamless Convenience and Quality Service with Hitch
        </h4>
        <p className="text-sm md:text-2xl">
          With Hitch, you can now access a comprehensive range of services at
          your fingertips, ensuring efficiency, comfort, and unmatched
          convenience. {`Let's`} simplify your life together!
        </p>
        <button className="text-primary bg-[#FFFFFFDE] h-12 px-5 w-fit mx-auto rounded-md flex justify-center items-center ">
          Learn More
        </button>
      </div>
      <figure className="w-full h-full flex justify-center items-center">
        <Image
          src={hero}
          alt=""
          className="h-[90vw] md:h-[unset] object-contain"
        />
      </figure>
    </div>
  );
}
