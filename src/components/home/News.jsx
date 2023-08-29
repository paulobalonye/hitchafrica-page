import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import news1 from "@/assets/urban.jpg";
import news2 from "@/assets/bts.jpg";

export default function News() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-[1fr_2fr] gap-10">
      <div className="flex flex-col gap-10">
        <h3 className="font-[800] text-[28px] md:text-[48px] text-dark">
          Hitch Africa News and Media
        </h3>
        <p className="text-lg">
          To succeed in the modern world, companies must embrace the latest tech
          innovations.
        </p>
        {/* <button className="hidden md:flex gap-2 items-center text-primary mt-auto">
          See all articles <FaArrowRight />
        </button> */}
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-5">
        <nav className="flex flex-col gap-5">
          <Image src={news1} alt="" className="w-full md:h-[400px] object-cover" />
          <span className="text-primary bg-[#E8F7F2] rounded-full px-3 py-2 w-fit">
            Transport
          </span>
          <b className="text-xl text-dark font-[800]">
            Navigating Urban Life: How Hitch Africa Revolutionized City
            Transportation
          </b>
          <p className="font-[500]">
            Discover how Hitch {`Africa's`} innovative ride-hailing service has
            transformed the way people move around bustling cities, providing
            convenience, safety, and efficiency.
          </p>
        </nav>
        <nav className="flex flex-col gap-5">
          <Image src={news2} alt="" className="w-full md:h-[400px] object-cover" />
          <span className="text-primary bg-[#E8F7F2] rounded-full px-3 py-2 w-fit">
            Delivery
          </span>
          <b className="text-xl text-dark font-[800]">
            Delivering Delights: Behind the Scenes of Hitch {`Africa's`} Food
            and Package Delivery Services
          </b>
          <p className="font-[500]">
            Dive into the logistics and technology that power Hitch {`Africa's`} 
            seamless delivery experience, ensuring your meals and packages reach
            you swiftly and in perfect condition.
          </p>
        </nav>
      </div>
      {/* <button className="md:hidden flex gap-2 items-center text-primary mt-auto">
        See all articles <FaArrowRight />
      </button> */}
    </main>
  );
}
