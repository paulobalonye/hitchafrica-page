import Image from "next/image";
import underscore from "@/assets/underscore.svg";
import why1 from "@/assets/why/why1.svg";
import why2 from "@/assets/why/why2.svg";
import why3 from "@/assets/why/why3.svg";
export default function Statements() {
  return (
    <main className="px-5 md:px-24 py-10 md:py-24 flex flex-col gap-5 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          Mission And Visions
        </h3>
        <Image src={underscore} alt="" className="w-2/3 md:w-[unset]" />
      </div>
      <div className="w-2/3 mx-auto flex flex-col md:grid grid-cols-3 justify-center items-center bg-white shadow-md rounded-lg">
        <nav className="flex flex-col items-center text-center gap-5 p-10 h-full">
          <b className="text-2xl font-[600] text-black">Mission</b>
          <p className="text-lg">
            Our mission is to empower users with seamless access to a variety of
            services, enhancing convenience and simplifying everyday tasks.
          </p>
        </nav>
        <nav className="flex flex-col items-center text-center gap-5 p-10 bg-[#C0D1D2] -skew-x-12  h-full">
          <b className="text-2xl font-[600] text-black skew-x-12">Vision</b>
          <p className="text-lg skew-x-12">
            Our vision is to reimagine accessibility by creating a unified
            platform that transforms how people engage with services, making
            modern living effortless and efficient.
          </p>
        </nav>
        <nav className="flex flex-col items-center text-center gap-5 p-10 h-full">
          <b className="text-2xl font-[600] text-black">Values</b>
          <p className="text-lg">
            We embrace diversity and inclusivity, striving to create an
            environment where all users, regardless of backgrounds, feel welcome
            and represented. We believe in providing equal access and
            opportunities for everyone within our platform.
          </p>
        </nav>
      </div>
    </main>
  );
}
