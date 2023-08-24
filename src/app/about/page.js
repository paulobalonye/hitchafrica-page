// import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team";
import Contact from "@/components/about/Contact";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE] ">
      {/* <Hero /> */}
      <Team />
      <Contact />
    </main>
  );
}
