import Image from "next/image";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";
import hero from "@/assets/hero.svg";
import fline from '@/assets/fline.svg';

export default function Hero() {
  return (
    <div className="relative px-5 md:px-24 rounded-bl-[100px] md:rounded-bl-[200px] text-white bg-primary w-full py-10 flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-[0]">
      <Image src={fline} alt="" className='absolute w-full h-full  top-0 left-0 z-[-1]' />
      <div className="w-full flex flex-col gap-4 md:gap-8 md:py-20">
        <h4 className="text-3xl md:text-[56px] font-[700] leading-normal">
          Your Marketplace for Convenience and Comfort!
        </h4>
        <p className="md:text-2xl">
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
        <Image src={hero} alt="" className="h-[90vw] md:h-[90%] md:object-contain" />
      </figure>
    </div>
  );
}
