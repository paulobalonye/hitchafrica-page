import Hero from "@/components/privacy/Hero";
import Privacy from "@/components/privacy/Privacy";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Privacy />
    </main>
  );
}
