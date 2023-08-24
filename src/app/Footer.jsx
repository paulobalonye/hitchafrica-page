import Link from "next/link";
import logo from "@/assets/logo-h.svg";
import Image from "next/image";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";
import { FaEnvelope, FaPhone } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#F8F8FC] relative gap-10 md:gap-20 z-0 pt-10 md:pt-20 px-5 md:px-20 font-[400] text-sm md:text-base">
      <div className="flex flex-col text-center justify-center items-center gap-10 py-10 md:py-20">
        <div className="flex flex-col gap-5 text-dark text-center text-lg">
          <b className="text-[32px] md:text-[48px] font-[800] leading-normal">
            See the difference after
            <br className="hidden md:block" /> you try Hitch!
          </b>
        </div>
        {/* <nav className="grid grid-cols-2 md:flex gap-4 items-center">
          <Link href="https://onelink.to/9f7vr6">
            <Image src={playstore} alt="" />
          </Link>
          <Link href="https://onelink.to/9f7vr6">
            <Image src={appstore} alt="" />
          </Link>
        </nav> */}
      </div>
      <div className="gap-5  grid grid-cols-2 md:grid-cols-4 text-dark">
        <nav className="flex flex-col gap-5 col-span-2 md:col-span-1">
          <Image src={logo} alt="" className="" />
          <nav className="flex flex-col gap-3 text-xl">
            <p className="flex gap-4 items-center">
              <FaPhone />
              +1 234 56 78
            </p>
            <p className="flex gap-4 items-center">
              <FaEnvelope />
              info@hitchafrica.com
            </p>
          </nav>
          <nav className="grid grid-cols-2 md:flex gap-4 items-center">
            <Link href="https://onelink.to/9f7vr6">
              <Image src={playstore} alt="" />
            </Link>
            <Link href="https://onelink.to/9f7vr6">
              <Image src={appstore} alt="" />
            </Link>
          </nav>
        </nav>
        <nav className="flex flex-col md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-[600] md:font-[700] text-2xl">Products</h3>
            <ul className="flex flex-col gap-3">
              <Link href="/product">Rides</Link>
              <Link href="/product">Food delivery</Link>
              <Link href="/product">Bike booking</Link>
              <Link href="/product">Grocery delivery</Link>
              <Link href="/product">Courier delivery</Link>
              <Link href="/product">Home cleaning</Link>
            </ul>
          </div>
        </nav>
        <nav className="flex flex-col md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-[600] md:font-[700] text-2xl">
              Partner with Hitch
            </h3>
            <ul className="flex flex-col gap-3">
              <Link href="/partner-with-us">Sign up as a driver</Link>
              <Link href="/partner-with-us">Sign up as a merchant</Link>
              <Link href="/partner-with-us">Sign up as a service provider</Link>
            </ul>
          </div>
        </nav>
        <nav className="flex flex-col md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-[600] md:font-[700] text-2xl">Company</h3>
            <ul className="flex flex-col gap-3">
              <Link href="/about">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/legal-compliance">Legal compliance</Link>
              <Link href="/terms-and-condition">Terms & Condition</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-xs md:text-base py-4 md:py-8 flex flex-col gap-1 justify-center items-center text-center border-[#9EA9A8] border-t">
        <span> © Hitch Africa Copyright Reserved 2023 </span>
      </div>
    </footer>
  );
}
