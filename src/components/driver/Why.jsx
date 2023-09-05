import Image from "next/image";
import why1 from "@/assets/why/why1.jpg";
import why2 from "@/assets/why/why2.jpg";
import why3 from "@/assets/why/why3.jpg";
export default function Why() {
  return (
    <main className="px-5 md:px-24 py-10 md:py-24 flex flex-col gap-5 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[44px] text-primary">
          Why Choose Hitch
        </h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-10">
        <nav className="text-center px-5 flex flex-col gap-4 justify-center items-center">
          <Image src={why3} alt="" className="w-1/2" />
          <b className="text-2xl mt-auto">Flexibility Guaranteed</b>
          <p className="text-lg">Enjoy the freedom to drive on <br /> your own terms.</p>
        </nav>
        <nav className="text-center px-5 flex flex-col gap-4 justify-center items-center">
          <Image src={why1} alt="" className="w-1/2" />
          <b className="text-2xl mt-auto">Earn More</b>
          <p className="text-lg">Maximize your with <br /> competitive rates.</p>
        </nav>
        <nav className="text-center px-5 flex flex-col gap-4 justify-center items-center">
          <Image src={why2} alt="" className="w-1/2" />
          <b className="text-2xl mt-auto">Safety First</b>
          <p className="text-lg">Drive with confidence, knowing we <br /> prioritize your safety.</p>
        </nav>
      </div>
    </main>
  );
}
