import Hero from "@/components/driver/Hero";
import Why from "@/components/driver/Why";
import How from "@/components/driver/How";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE] ">
      <Hero />
      <Why />
      <How />
    </main>
  );
}
