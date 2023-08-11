import Hero from "@/components/about/Hero";
import Welcome from "@/components/about/Welcome";
import Where from "@/components/about/Where";
import Why from "@/components/about/Why";
import Join from '@/components/home/Join'
export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Welcome />
      <Why />
      <Where />
      <Join />
    </main>
  );
}
