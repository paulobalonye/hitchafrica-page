import Image from "next/image";
import underscore from "@/assets/underscore.svg";
import why1 from "@/assets/why/why1.svg";
import why2 from "@/assets/why/why2.svg";
import why3 from "@/assets/why/why3.svg";
export default function Why() {
  return (
    <main className="px-5 md:px-24 py-10 md:py-24 flex flex-col gap-5 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          Why Choose Hitch
        </h3>
        <Image src={underscore} alt="" className="w-2/3 md:w-[unset]" />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 text-[40px] font-[700]  text-primary">
        <nav className="text-center px-5 py-28 h-auto rounded-xl shadow-md w-full md:w-1/4 flex justify-center items-center relative z-0">
          <Image src={why3} alt="" className="absolute left-0 top-0 w-full h-full z-[-1] opacity-20 object-cover" />
          Versatile <br /> Convenience
        </nav>
        <nav className="text-center px-5 py-28 h-auto rounded-xl shadow-md w-full md:w-1/4 flex justify-center items-center relative z-0">
          <Image src={why1} alt="" className="absolute left-0 top-0 w-full h-full z-[-1] opacity-50 object-cover" />
          Seamless <br /> Integration
        </nav>
        <nav className="text-center px-5 py-28 h-auto rounded-xl shadow-md w-full md:w-1/4 flex justify-center items-center relative z-0">
          <Image src={why2} alt="" className="absolute left-0 top-0 w-full h-full z-[-1] opacity-50 object-cover" />
          Modern Living <br /> Made Easy
        </nav>
      </div>
    </main>
  );
}
