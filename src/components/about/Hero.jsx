import Image from "next/image";
import hero from "@/assets/hero-abt2.svg";
import fline from "@/assets/aline.svg";
import bg from "@/assets/hero-abt.jpeg";
export default function Hero() {
  return (
    <div
      className="relative px-5 md:px-24 md:min-h-screen text-white w-full flex flex-col md:grid grid-cols-[2fr_1.4fr] py-10 gap-5 md:gap-10 items-center z-0"
    >
      <Image
        src={fline}
        alt=""
        className="absolute w-full h-full  top-0 left-0 z-[-1]"
      />
      <Image
        src={bg}
        alt=""
        className="absolute w-full h-full  top-0 left-0 z-[-2] object-cover md:object-fill"
      />
      <div className="w-full flex flex-col gap-4 md:gap-8 md:py-20">
      <h4 className="text-3xl md:text-[56px] font-[700] leading-normal">
          Discover the Hitch Mobile App Your Ultimate Multi-Service Platform
        </h4>
        <p className="md:text-2xl">
          Welcome to Hitch Mobile {`App's`} About Page, where convenience meets
          innovation. We are your go-to multi-service platform, offering an
          array of solutions from food delivery to bike rentals, groceries,
          parcel delivery, and home cleaning. Our mission is to simplify your
          daily life through seamless experiences, ensuring you can focus on
          what truly matters. Join us as we reshape modern living with
          technology and practicality at its core.
        </p>
      </div>
      <figure className="w-full flex flex-col gap-5 justify-center items-center">
        <Image
          src={hero}
          alt=""
          className="h-[90vw] md:h-[unset] object-contain"
        />
        <button className="text-primary bg-[#FFFFFFDE] h-12 px-5 w-fit mx-auto rounded-md flex justify-center items-center ">
          Learn More
        </button>
      </figure>
    </div>
  );
}
