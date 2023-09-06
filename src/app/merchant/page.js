import Hero from "@/components/merchant/Hero";
import How from "@/components/merchant/How";
import Faq from "@/components/merchant/Faq";
import Others from "@/components/merchant/Others";
import Pitch from "@/components/merchant/Pitch";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE] ">
      <Hero />
      <Pitch />
      <Others />
      <How />
      <Faq />
    </main>
  );
}
