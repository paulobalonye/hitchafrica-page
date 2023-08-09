import Hero from "@/components/services/Hero";
import How from "@/components/home/How";
import Join from "@/components/home/Join";
import Solutions from "@/components/home/Solutions";export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Solutions />
      <How />
      <Join />
    </main>
  );
}
