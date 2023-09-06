"use client";
import logo from "@/assets/logo2.png";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";

export function useOnHoverOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <header className="sticky bg-white md:bg-inherit top-0 left-0 backdrop-blur-[20px] z-[999999] text-white md:text-primary font-[600] shadow-md px-3 md:px-20 py-4 flex justify-between items-center">
      <div className="flex items-center gap-10">
        <a href="/">
          <Image src={logo} alt="" className=" object-contain" />
        </a>
        <nav
          className={`${
            open
              ? " left-0 top-14  py-5  bg-white text-primary px-5 md:px-0"
              : " top-14 left-[-900%]"
          } absolute md:static  w-full z-[999999999] md:w-[unset] text-lg flex flex-col md:flex-row shadow-md md:shadow-none  gap-5 md:gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap`}
        >
          {/* <a
            href="/partner-with-us"
            onClick={() => setOpen(false)}
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
          >
            Partner With Us
          </a> */}
          <div
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
            ref={dropdownRef}
          >
            <button
              className="flex gap-1 items-center text-primary"
              onMouseOver={() => setMenuDropDownOpen(true)}
              onClick={() => setMenuDropDownOpen(!isMenuDropDownOpen)}
            >
              Partner With Us
              {isMenuDropDownOpen ? <FaCaretUp /> : <FaCaretDown />}
            </button>
            {isMenuDropDownOpen && (
              <nav
                className="flex flex-col items-start md:absolute  mt-1  bg-white md:shadow-md rounded-xl md:py-5 px-5"
                // ref={dropdownRef}
              >
                <Link
                  href="/driver"
                  onClick={() => setOpen(false)}
                  className="py-4 border-b w-full"
                >
                  Partner As Driver
                </Link>
                <Link
                  href="/merchant"
                  onClick={() => setOpen(false)}
                  className="py-4 border-b w-full"
                >
                  Partner As Merchant
                </Link>
                <Link
                  href="/service-provider"
                  onClick={() => setOpen(false)}
                  className="py-4 md:border-b w-full"
                >
                  Partner As Service Provider
                </Link>
              </nav>
            )}
          </div>
          <Link
            href="/product"
            onClick={() => setOpen(false)}
            className="py-4 md:py-0 border-b md:border-none w-full md:w-fit md:min-w-fit"
          >
            Products
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
          {/* <a
            href="https://onelink.to/hurb2a"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <Link
            href="https://onelink.to/hurb2a"
            className="md:hidden rounded-md px-6 h-12 flex justify-center items-center bg-inherit border text-[#001E1D] w-full"
          >
            Signup As a Driver Partner
          </Link>
          {/* </a> */}
        </nav>
      </div>

      <Link
        href="https://onelink.to/hurb2a"
        className="rounded-md hidden px-6 h-12 md:flex justify-center items-center bg-inherit border text-[#001E1D]"
      >
        Signup As a Driver Partner
      </Link>
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
