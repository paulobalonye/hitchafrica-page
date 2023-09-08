import Image from "next/image";
import abt1 from "@/assets/mission.jpg";
import Link from "next/link";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";

export default function Mission() {
  return (
    <div className="relative px-5 md:px-20 py-10 w-full flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-10 items-center">
      <div className="w-full flex flex-col gap-4 md:gap-6 py-10 md:py-16">
        <h4 className="text-[32px] md:text-[50px] font-[800] leading-normal text-dark">
          Our Mission
        </h4>
        <p className="text-lg">
          At Hitch Africa, our mission transcends mere transportation and
          delivery services. {`We're`} on a quest to revolutionize the way
          cities move, connect, and thrive. Through our innovative platform,{" "}
          {`we're`} streamlining urban mobility, making it not just a means of
          transport, but a seamless part of everyday life. We envision a future
          where getting from A to B is not just efficient, but enjoyable,
          sustainable, and integral to the fabric of communities.
        </p>
        <p className="text-lg">
          But our mission goes beyond mobility; {`it's`} about empowering local
          businesses and entrepreneurs. {`We're`} dedicated to creating a
          vibrant marketplace where merchants can flourish and where customers
          have convenient access to a wide array of products and services. By
          fostering this ecosystem, {`we're`} not only enhancing convenience but
          also nurturing local economies. At Hitch Africa, our mission is to
          catalyze positive change, to build bridges between people and
          businesses, and to pave the way for smarter, more connected cities.
        </p>
        <nav className="grid grid-cols-2 md:flex gap-4 items-center">
          <Link href="https://onelink.to/9f7vr6">
            <Image src={playstore} alt="" />
          </Link>
          <Link href="https://onelink.to/9f7vr6">
            <Image src={appstore} alt="" />
          </Link>
        </nav>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-1">
        <Image src={abt1} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
