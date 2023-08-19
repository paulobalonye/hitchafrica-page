import Form from "@/components/contact/Form";
import Hero from "@/components/contact/Hero";
import Offices from "@/components/contact/Offices";

export default function Home() {
  return (
    <main className="flex flex-col justify-center z-[0] overflow-x-hidden relative ">
      <Hero />
      <Form />
    </main>
  );
}
