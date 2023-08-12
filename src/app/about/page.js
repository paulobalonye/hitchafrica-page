import Hero from "@/components/about/Hero";
import Statements from "@/components/about/Statements";
import Welcome from "@/components/about/Welcome";
import Where from "@/components/about/Where";
import Why from "@/components/about/Why";
import Join from "@/components/home/Join";
import bg from "@/assets/abt-bg.svg";
export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <div
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Welcome />
        <Why />
        <Where />
      </div>
      <Statements />
      <Join />
    </main>
  );
}
