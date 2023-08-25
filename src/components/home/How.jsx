import Image from "next/image";
import dp1 from "@/assets/dp/dp3.jpeg";
import dp2 from "@/assets/dp/dp2.svg";
import dp3 from "@/assets/dp/dp3.svg";
import dp4 from "@/assets/dp/dp4.svg";
import dp5 from "@/assets/dp/dp5.svg";
import dp6 from "@/assets/dp/dp6.jpeg";


import bg from "@/assets/review/review1.svg";

export default function How() {
  return (
    <div
      className="px-3 md:px-24 py-10 md:py-20 flex flex-col gap-8 md:gap-16 z-10 bg-blend-overlay bg-no-repeat bg-left"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[800] text-3xl md:text-[48px] text-dark">
          Don’t just take our word.
        </h3>
      </div>
      <div className="w-full flex flex-col-reverse md:grid grid-cols-3 gap-5 md:gap-10 items-center z-10">
        <nav className="bg-[rgba(255,255,254,0.30)] border flex flex-col gap-5 px-5 md:px-10 py-5 md:py-10 justify-evenly items-start rounded-xl">
          <div className="flex justify-start items-center gap-2">
            <Image src={dp3} alt="" className="h-10 w-10 md:w-16 md:h-16 rounded-[50%] object-cover" />{" "}
            <p className="flex flex-col gap-1">
              <span className="md:text-lg font-[800] text-dark">
              Olivia Eze
              </span>
              {/* <small className="text-sm text-light">Marv Corp</small> */}
            </p>
          </div>
          <p className="">
            Hitch Africa made my daily commute a breeze. Reliable rides and
            friendly drivers, {`they've`} got it all!.
          </p>
          <b className="mt-10 text-[#7A7070]">May 02, 2023</b>
        </nav>
        <nav className="bg-[rgba(255,255,254,0.30)] border flex flex-col gap-5 px-5 md:px-10 py-5 md:py-10 justify-evenly items-start rounded-xl">
          <div className="flex justify-start items-center gap-2">
            <Image src={dp2} alt="" className="h-10 w-10 md:w-16 md:h-16 rounded-[50%] object-cover" />{" "}
            <p className="flex flex-col gap-1">
              <span className="md:text-lg font-[800] text-dark">
              Moshood Taiwo
              </span>
              {/* <small className="text-sm text-light">Marv Corp</small> */}
            </p>
          </div>
          <p className="">
            I needed a last-minute delivery, and Hitch Africa came through. Fast
            and secure, {`I'm`} impressed!
          </p>
          <b className="mt-10 text-[#7A7070]">July, 2023</b>
        </nav>
        <nav className="bg-[rgba(255,255,254,0.30)] border flex flex-col gap-5 px-5 md:px-10 py-5 md:py-10 justify-evenly items-start rounded-xl">
          <div className="flex justify-start items-center gap-2">
            <Image src={dp1} alt="" className="h-10 w-10 md:w-16 md:h-16 rounded-[50%] object-cover" />{" "}
            <p className="flex flex-col gap-1">
              <span className="md:text-lg font-[800] text-dark">
              Oluwatobi Adeyemi
              </span>
              {/* <small className="text-sm text-light">Marv Corp</small> */}
            </p>
          </div>
          <p className="">
            Tutors from Hitch Africa helped boost my grades. Quality education
            right at my doorstep.
          </p>
          <b className="mt-10 text-[#7A7070]">July, 2023</b>
        </nav>
        <nav className="bg-[rgba(255,255,254,0.30)] border flex flex-col gap-5 px-5 md:px-10 py-5 md:py-10 justify-evenly items-start rounded-xl">
          <div className="flex justify-start items-center gap-2">
            <Image src={dp4} alt="" className="h-10 w-10 md:w-16 md:h-16 rounded-[50%] object-cover" />{" "}
            <p className="flex flex-col gap-1">
              <span className="md:text-lg font-[800] text-dark">
              Jeffery Nwankwo
              </span>
              {/* <small className="text-sm text-light">Marv Corp</small> */}
            </p>
          </div>
          <p className="">
            From fixing wiring to plumbing, {`I've`} found the best pros on
            Hitch Africa. Superb service!
          </p>
          <b className="mt-10 text-[#7A7070]">Jun, 2023</b>
        </nav>
        <nav className="bg-[rgba(255,255,254,0.30)] border flex flex-col gap-5 px-5 md:px-10 py-5 md:py-10 justify-evenly items-start rounded-xl">
          <div className="flex justify-start items-center gap-2">
            <Image src={dp5} alt="" className="h-10 w-10 md:w-16 md:h-16 rounded-[50%] object-cover" />{" "}
            <p className="flex flex-col gap-1">
              <span className="md:text-lg font-[800] text-dark">
                Elozino Prosper
              </span>
              {/* <small className="text-sm text-light">Marv Corp</small> */}
            </p>
          </div>
          <p className="">
            Hitch Africa is my go-to for delicious food delivery. Quick, hot
            meals whenever I crave.
          </p>
          <b className="mt-10 text-[#7A7070]">May, 2023</b>
        </nav>
        <nav className="bg-[rgba(255,255,254,0.30)] border flex flex-col gap-5 px-5 md:px-10 py-5 md:py-10 justify-evenly items-start rounded-xl">
          <div className="flex justify-start items-center gap-2">
            <Image src={dp6} alt="" className="h-10 w-10 md:w-16 md:h-16 rounded-[50%] object-cover" />{" "}
            <p className="flex flex-col gap-1">
              <span className="md:text-lg font-[800] text-dark">
              Daniel Okonkwo
              </span>
              {/* <small className="text-sm text-light">Marv Corp</small> */}
            </p>
          </div>
          <p className="">
            Efficient, easy, and professional - Hitch {`Africa's`} services have
            truly simplified my life.
          </p>
          <b className="mt-10 text-[#7A7070]">May, 2023</b>
        </nav>
      </div>
    </div>
  );
}
