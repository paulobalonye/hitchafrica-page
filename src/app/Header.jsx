"use client";
import logo from "@/assets/logo-h.svg";
import { useState } from "react";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("NG");
  return (
    <header className="sticky bg-white md:bg-inherit top-0 left-0 backdrop-blur-[20px] z-[999999] text-white md:text-primary font-[600] shadow-md px-3 md:px-20 py-4 flex justify-between items-center">
      <div className="flex items-center gap-10">
        <a href="/">
          <Image src={logo} alt="" className=" object-contain" />
        </a>
        <nav
          className={`${
            open
              ? " left-0 top-14  py-5  bg-primary text-white px-5 md:px-0"
              : " top-14 left-[-900%]"
          } absolute md:static  w-full z-[999999999] md:w-[unset] text-lg flex flex-col md:flex-row shadow-md md:shadow-none  gap-5 md:gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap`}
        >
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
          >
            Partner With Us
          </a>
          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
          >
            Pricing
          </Link>
          <a
            href="/about"
            onClick={() => setOpen(false)}
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
          >
            About Us
          </a>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
          >
            Contact Us
          </a>
          <button className="md:hidden rounded-md px-6 h-12 bg-inherit border text-[#001E1D] w-full">
            Signup As a Driver Partner
          </button>
        </nav>
      </div>

      <button className="rounded-md hidden md:block px-6 h-12 bg-inherit border text-[#001E1D]">
        Signup As a Driver Partner
      </button>
      {open ? (
        <FaTimes
          className="block md:hidden transition-all duration-1000 ease-in-out text-[#343D48] text-xl"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <FaBars
          className="block md:hidden transition-all duration-1000 ease-in-out text-[#343D48] text-xl"
          onClick={() => setOpen(!open)}
        />
      )}
    </header>
  );
}
