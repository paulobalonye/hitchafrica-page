import Image from "next/image";
import bg from "@/assets/officebg.png";
export default function Offices() {
  return (
    <main className="bg-[#F9F9F9] px-3 md:px-24 py-10 md:py-24 mt-16 flex flex-col items-center gap-5 md:gap-14 z-10 relative">
      <Image
        src={bg}
        alt=""
        className="absolute w-full h-full  top-0 left-0 z-[-1] object-cover md:object-fill"
      />
      <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
        Our Offices
      </h3>
      <div className="text-[#343D48] w-full flex flex-col md:flex-row justify-center gap-5 md:gap-10 items-center z-10">
        <nav className="w-[85%] md:w-1/3 p-10 bg-white flex flex-col gap-5 shadow leading-normal rounded-3xl">
          <b className=" text-2xl font-[700]">La Crosse</b>
          <p>
            232 Third Street North Suite 456 <br />
            La Crosse, WI 5465 <br />
            USA
          </p>
          <div className="flex flex-col gap-3">
            <p>
              Tel : <span className="text-[#4F7E80]"> +1 123 456 7897 </span>
            </p>
            <p>
              Fax : <span className="text-[#4F7E80]">+1 123 456 9879</span>
            </p>
          </div>
        </nav>
        <nav className="w-[85%] md:w-1/3 p-10 bg-white flex flex-col gap-5 shadow leading-normal rounded-3xl">
          <b className=" text-2xl font-[700]">New York</b>
          <p>
          232 Third Street North Suite 456 <br />
La Crosse, WI 5465 <br />
USA
          </p>
          <div className="flex flex-col gap-3">
            <p>
              Tel : <span className="text-[#4F7E80]"> +1 123 456 7897 </span>
            </p>
            <p>
              Fax : <span className="text-[#4F7E80]">+1 123 456 9879</span>
            </p>
          </div>
        </nav>
      </div>
    </main>
  );
}
