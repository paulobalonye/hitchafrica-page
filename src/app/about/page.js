import Hero from "@/components/about/Hero";
import Featured from "@/components/about/Featured";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import What from "@/components/about/What";
import Join from "@/components/about/Join";
import Contact from "@/components/about/Contact";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE] ">
      <Hero />
      <Featured />
      <Mission />
      <Values />
      <What />
      <Join />
      <Contact />
    </main>
  );
}
