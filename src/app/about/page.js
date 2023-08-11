import Join from "@/components/home/Join";
import Diff from "@/components/services/Diff";
import Hero from "@/components/about/Hero";
import Solutions from "@/components/services/Solutions";
export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Diff />
      <Join />
    </main>
  );
}
