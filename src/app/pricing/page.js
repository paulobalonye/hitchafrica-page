import Pricing from "@/components/pricing/Pricing";
import FAQ from "@/components/pricing/FAQ";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#FFFFFE] ">
      <Pricing />
      <FAQ />
    </main>
  );
}
