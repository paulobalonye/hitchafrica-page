import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import news1 from "@/assets/news/news1.jpg";
import news2 from "@/assets/news/news2.jpg";

export default function News() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-[1fr_2fr] gap-10">
      <div className="flex flex-col gap-10">
        <h3 className="font-[800] text-[28px] md:text-[48px] text-dark">Our Latest News and Articles</h3>
        <p className="text-lg">
          To succeed in the modern world, companies must embrace the latest tech
          innovations.
        </p>
        <button className="hidden md:flex gap-2 items-center text-primary mt-auto">
          See all articles <FaArrowRight />
        </button>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-5">
        <nav className="flex flex-col gap-5">
          <Image src={news1} alt=""  className='w-full'/>
          <span className="text-primary bg-[#E8F7F2] rounded-full px-3 py-2 w-fit">
            Tech life
          </span>
          <b className="text-xl text-dark font-[800]">
            Future Forward: Embracing the Latest Tech Innovations
          </b>
          <p className="font-[500]">
            To succeed in the modern world, companies must embrace the latest
            tech innovations.
          </p>
        </nav>
        <nav className="flex flex-col gap-5">
          <Image src={news2} alt=""  className='w-full'/>
          <span className="text-primary bg-[#E8F7F2] rounded-full px-3 py-2 w-fit">
            Tech life
          </span>
          <b className="text-xl text-dark font-[800]">
          Byte-Sized Insights: Breaking Down Complex Tech Topics
          </b>
          <p className="font-[500]">
          In the world of technology, there are countless complex and technical topics.
          </p>
        </nav>
      </div>
      <button className="md:hidden flex gap-2 items-center text-primary mt-auto">
          See all articles <FaArrowRight />
        </button>
    </main>
  );
}
