import Image from "next/image";
import news1 from "@/assets/howw/how2.png";
import news2 from "@/assets/howw/how1.png";
import Link from "next/link";

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
          <Image
            src={news1}
            alt=""
            className="w-full md:h-[400px] object-cover"
          />
          <span className="text-primary bg-[#E8F7F2] rounded-full px-3 py-2 w-fit">
            launch
          </span>
          <Link
            href="https://businessday.ng/technology/article/hitchafricas-borderless-marketplace-app-to-drive-on-demand-services/"
            className="text-xl text-dark font-[800]"
          >
            HitchAfrica’s borderless marketplace app to drive on-demand services
          </Link>
          <p className="font-[500]">
            Hitch Africa, an online marketplace for on-demand services for
            Africans is set to launch an innovative On-Demand Service experience
            for the African market that prioritises comfort, safety, and
            effortless transactions.
          </p>
        </nav>
        <nav className="flex flex-col gap-5">
          <Image
            src={news2}
            alt=""
            className="w-full md:h-[400px] object-cover"
          />
          <span className="text-primary bg-[#E8F7F2] rounded-full px-3 py-2 w-fit">
            launch
          </span>
          <Link
            href="https://guardian.ng/technology/firm-launches-borderless-marketplace-app-to-drive-on-demand-services/"
            className="text-xl text-dark font-[800]"
          >
            Firm launches borderless marketplace app to drive on-demand services
          </Link>
          <p className="font-[500]">
          HitchAfrica, a growing tech startup, is set to launch an innovative On-Demand Service experience for the African market, as it berths in major cities in Nigeria, in a fortnight.
          </p>
        </nav>
      </div>
      {/* <button className="md:hidden flex gap-2 items-center text-primary mt-auto">
        See all articles <FaArrowRight />
      </button> */}
    </main>
  );
}
