import Hero from "@/components/Hero";
import How from "@/components/How";
import Join from "@/components/Join";
import Solutions from "@/components/Solutions";
import Image from "next/image";
import map from "@/assets/map.svg";
import vector from "@/assets/vector.svg";
export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative ">
      <Image
        src={map}
        alt=""
        className="absolute top-[18%] w-full h-[36%] object-contain z-[-1]"
      />
      <Image
        src={vector}
        alt=""
        className="absolute bottom-0 w-full h-1/2 z-[-1]"
      />
      <Hero />
      <Solutions />
      <How />
      <Join />
    </main>
  );
}
