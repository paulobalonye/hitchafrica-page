import Hero from "@/components/home/Hero";
import How from "@/components/home/How";
import Join from "@/components/home/Join";
import Solutions from "@/components/home/Solutions";
import Image from "next/image";
import map from "@/assets/map.svg";
import vector from "@/assets/vector.svg";
export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative bg-[#F9F9F9] md:bg-[unset] ">
      <Image
        src={map}
        alt=""
        className="absolute top-[17%] md:top-[15%] w-full h-[40%] object-contain z-[-1]"
      />
      <Image
        src={vector}
        alt=""
        className="absolute bottom-0 w-full h-2/3 z-[-1] object-cover"
      />
      <Hero />
      <Solutions />
      <How />
      <Join />
    </main>
  );
}
