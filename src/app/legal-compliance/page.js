import Hero from "@/components/legal/Hero";
import Legal from "@/components/legal/Legal";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Legal />
    </main>
  );
}
