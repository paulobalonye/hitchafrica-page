import Hero from "@/components/home/Hero";
import How from "@/components/home/How";
import Join from "@/components/home/Join";
import Solutions from "@/components/home/Solutions";
import bg from "@/assets/hero/hero1.svg";
import News from "@/components/home/News";
export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE]">
      <Hero />
      <Solutions />
      <How />
      <News />
      <Join />
    </main>
  );
}
