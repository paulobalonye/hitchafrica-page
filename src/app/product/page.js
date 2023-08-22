import Pricing from "@/components/product/Product";
import FAQ from "@/components/product/FAQ";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative bg-[#F8F8FC] ">
      <Pricing />
      <FAQ />
    </main>
  );
}
