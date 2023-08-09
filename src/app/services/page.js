import Join from "@/components/home/Join";
import Diff from "@/components/services/Diff";
import Hero from "@/components/services/Hero";
import Solutions from "@/components/services/Solutions";
import MyCarousel from "@/components/services/Carousel";
export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Solutions />
      <Diff />
      <Join />
    </main>
  );
}
