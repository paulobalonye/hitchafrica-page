import Image from "next/image";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";
import hero from "@/assets/hero.svg";
import fline from '@/assets/fline.svg';

export default function Hero() {
  return (
    <div className="relative px-5 md:px-20 rounded-bl-[200px] text-white bg-primary w-full flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
      <Image src={fline} alt="" className='absolute w-full h-full  top-0 left-0 inset-0 opacity-30' />
  
      <div className="w-full flex flex-col gap-4 md:gap-8 py-10 md:py-20">
        <h4 className="text-xl md:text-[56px] font-[700] leading-normal">
          Your Marketplace for Convenience and Comfort!
        </h4>
        <p className="text-sm md:text-2xl">
          Tired of juggling between multiple apps for different services? Look
          no further! With HitchAfrica, we bring you a seamless solution with an
          array of services tailored to meet all your daily needs.
        </p>
        <nav className="grid grid-cols-2 md:flex gap-4 items-center">
          <Image src={playstore} alt="" />
          <Image src={appstore} alt="" />
        </nav>
      </div>
      <figure className="w-full h-full flex justify-center items-end">
        <Image src={hero} alt="" className="h-[90vw] md:h-[90%] object-contain" />
      </figure>
    </div>
  );
}
