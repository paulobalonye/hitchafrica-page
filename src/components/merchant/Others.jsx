import Image from "next/image";
import step from "@/assets/howw/how1.png";
import arr1 from "@/assets/step1.svg";
import arr2 from "@/assets/step2.svg";

export default function Others() {
  return (
    <section className="flex flex-col gap-14 py-10 md:py-16">
      <div className="flex flex-col gap-5 mx-auto text-center text-lg">
        <h3 className="text-xl md:text-[32px] text-center leading-normal font-[600]">
          Our partnerships expand beyond restaurants
        </h3>
        <p>We partner with businesses of all types.</p>
      </div>
      <section className="px-5 md:px-24 py-10 flex flex-col gap-5 bg-primary text-white relative">
        <div className="flex flex-col md:flex-row justify-between gap-5 mx-auto w-full order-1">
          <nav className="flex flex-col gap-3 w-full md:w-1/3">
            <b className="text-xl md:text-2xl font-[600] ">Retail Shops</b>
            <p className="md:text-lg">
              Boost your retail {`shop's`} visibility and sales by partnering
              with Hitch Africa.
            </p>
          </nav>
          <nav className="flex flex-col gap-3 w-full md:w-1/3">
            <b className="text-xl md:text-2xl font-[600] ">Grocery Stores</b>
            <p className="md:text-lg">
              Connect with local shoppers and offer hassle-free grocery
              deliveries through Hitch Africa.
            </p>
          </nav>
        </div>
        <div className="mx-auto flex gap-5 md:gap-14 items-center justify-center -order-1 md:order-1">
          <Image src={arr1} alt="" className="hidden md:block" />
          <Image
            src={step}
            alt=""
            className=" md:h-[70vh] object-fill md:object-contain w-full md:w-[unset]"
          />
          <Image src={arr2} alt="" className="hidden md:block" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 mx-auto w-full order-1">
          <nav className="flex flex-col gap-3 w-full md:w-1/3">
            <b className="text-xl md:text-2xl font-[600] ">Pharmacies</b>
            <p className="md:text-lg">
              Expand your {`pharmacy's`} accessibility and provide essential
              medications with Hitch Africa.
            </p>
          </nav>
          <nav className="flex flex-col gap-3 w-full md:w-1/3">
            <b className="text-xl md:text-2xl font-[600] ">Flourist Shops</b>
            <p className="md:text-lg">
              Join Hitch Africa as a florist and share the beauty of fresh
              flowers with customers across the city.
            </p>
          </nav>
        </div>
      </section>
    </section>
  );
}
