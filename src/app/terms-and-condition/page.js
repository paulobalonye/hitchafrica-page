import Hero from "@/components/terms/Hero";
import Terms from "@/components/terms/Terms";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Terms />
    </main>
  );
}
