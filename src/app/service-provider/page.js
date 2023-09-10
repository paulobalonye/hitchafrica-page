import Hero from "@/components/provider/Hero";
import How from "@/components/provider/How";
import Faq from "@/components/provider/Faq";
import Pitch from "@/components/provider/Pitch";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE] ">
      <Hero />
      <Pitch />
      <How />
      <Faq />
    </main>
  );
}
