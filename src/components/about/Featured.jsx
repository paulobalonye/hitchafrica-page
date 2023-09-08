import Image from "next/image";
import Link from "next/link"
import ft1 from "@/assets/feat/ft1.png";
import ft2 from "@/assets/feat/ft2.png";
import ft3 from "@/assets/feat/ft3.png";

export default function Featured() {
  return (
    <div className="w-full px-5 md:px-20 py-20 bg-[#C0D1D280] flex flex-col gap-5 md:gap-10">
      <div className="flex items-center justify-center gap-5 md:gap-10">
        <span className="h-1 rounded-full w-full bg-gray-300 hidden md:block"></span>
        <h4 className="text-primary min-w-fit text-2xl md:text-[40px] font-[700] leading-normal">
          Featured In
        </h4>
        <span className="h-1 rounded-full w-full bg-gray-300 hidden md:block"></span>
      </div>
      <figure className="py-10 snap overflow-scroll grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 items-center">
       <div className="hidden md:block"></div>
       {/* <Link href=''><Image src={ft1} alt="" className="hover:shadow-xl scale-105 w-full" /></Link> */}
       <Link href='https://guardian.ng/technology/firm-launches-borderless-marketplace-app-to-drive-on-demand-services/'><Image src={ft1} alt="" className="hover:shadow-xl scale-105 w-full" /></Link>
       <Link href='https://businessday.ng/technology/article/hitchafricas-borderless-marketplace-app-to-drive-on-demand-services/'><Image src={ft3} alt="" className="hover:shadow-xl scale-105 w-full" /></Link>
       {/* <Link href=''><Image src={ft2} alt="" className="hover:shadow-xl scale-105 w-full" /></Link> */}
       <div className="hidden md:block"></div>
      </figure>
    </div>
  );
}
