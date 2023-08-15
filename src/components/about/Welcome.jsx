import Image from "next/image";
import underscore from "@/assets/underscore.svg";
import welcome from '@/assets/welcome.png'
export default function Welcome() {
  return (
    <main className="py-10 md:py-24 flex flex-col gap-5 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          Welcome To Hitch
        </h3>
        <Image src={underscore} alt="" className="w-2/3 md:w-[unset]" />
      </div>
      <figure className='px-3 md:px-24 w-full bg-[#C0D1D280] flex justify-center'>
        <Image src={welcome} alt="" className='md:w-1/2 w-full' />
      </figure>
    </main>
  );
}
