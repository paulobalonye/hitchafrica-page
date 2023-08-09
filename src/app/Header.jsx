"use client";
import logo from "@/assets/logo.png";
import { useState } from "react";
import menu from "@/assets/menu.svg";
import ham from "@/assets/cancel.svg";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("NG");
  return (
    <header className="sticky bg-primary top-0 left-0 z-[999999] text-white shadow-md px-3 md:px-24 py-4 flex justify-between items-center">
      <a href="#top">
        <Image src={logo} alt="" className=" object-contain" />
      </a>
      <nav
        className={`${
          open
            ? " left-0 top-16  py-5  bg-primary px-5 md:px-0"
            : " top-16 left-[-900%]"
        } absolute md:static  w-full z-[999999999] md:w-[unset] flex flex-col md:flex-row shadow-md md:shadow-none  gap-5 md:gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap text-text`}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="py-4 md:py-0 border-b md:border-none w-full"
        >
          Home
        </a>
        <Link
          href="/services"
          onClick={() => setOpen(false)}
          className="py-4 md:py-0 border-b md:border-none w-full"
        >
          Services
        </Link>
        <a
          href="/#about"
          onClick={() => setOpen(false)}
          className="py-4 md:py-0 border-b md:border-none w-full"
        >
          About
        </a>
        <a
          href="/#contact"
          onClick={() => setOpen(false)}
          className="py-4 md:py-0 border-b md:border-none w-full"
        >
          Contact
        </a>
        <nav className="md:hidden flex gap-5 flex-col w-full">
          <ReactFlagsSelect
            selected={country}
            onSelect={(code) => {
              setCountry(code);
            }}
            fullWidth={false}
            alignOptionsToRight
            countries={["NG", "CA"]}
            id="country"
            selectButtonClassName="border-none text-white bg-[#265D61] rounded-full"
            className="border-none bg-[#265D61] rounded-full"
          />

          <button className="rounded-md px-10 h-12 bg-[#CB1F52] text-white w-full">
            Sign Up
          </button>
        </nav>
      </nav>

      <nav className="hidden md:flex gap-5">
        <ReactFlagsSelect
          selected={country}
          onSelect={(code) => {
            setCountry(code);
          }}
          fullWidth={false}
          alignOptionsToRight
          countries={["NG", "CA"]}
          id="country"
          selectButtonClassName="border-none text-white bg-[#265D61] rounded-full"
          className="border-none bg-[#265D61] text-white rounded-full"
        />
        <button className="rounded-md px-10 h-12 bg-[#CB1F52] text-white">
          <a href="">Sign Up</a>
        </button>
      </nav>
      <Image
        src={open ? ham : menu}
        alt=""
        onClick={() => setOpen(!open)}
        className="block md:hidden transition-all duration-1000 ease-in-out"
      />
    </header>
  );
}
