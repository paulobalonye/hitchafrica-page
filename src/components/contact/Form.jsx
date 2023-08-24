import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Form() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly bg-[#F9FAFC] gap-10 px-5 md:px-20 py-10 md:py-20 w-full">
      <div className="w-full flex flex-col gap-5">
        <h3 className="text-lg text-primary">CONTACT US</h3>
        <div className="flex flex-col gap-8">
          <h3 className="font-[800] leading-normal text-dark text-[32px] md:text-[56px]">
            Connect with Us:
            <br className="hidden md:block" /> Your Questions,
            <br className="hidden md:block" /> Our Priority.
          </h3>
          <nav className="flex gap-5 items-center text-xl text-dark">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="" />
            </a>
          </nav>
        </div>
      </div>
      <form
        action="https://formsubmit.co/support@hitchafrica.com"
        method="POST"
        className="w-full p-5 md:p-10 rounded-xl bg-white flex flex-col  gap-10 "
      >
        <div className="flex flex-col md:grid grid-cols-2 gap-5 items-center">
          <label className="flex flex-col gap-1 w-full">
            <span className="flex items-center gap-1">First Name</span>
            <input
              type="text"
              placeholder="Enter First Name"
              name="First Name"
              className="h-12 px-3 border z-10 w-full py-5 outline-none rounded"
            />
          </label>
          <label className="flex flex-col gap-1 w-full">
            <span className="flex items-center gap-1">Last Name</span>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="Last Name"
              className="h-12 px-3 border z-10 w-full py-5 outline-none rounded"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1 w-full">
          <span className="flex items-center gap-1">Email</span>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="Email"
            className="h-12 px-3 border z-10 w-full py-5 outline-none rounded"
          />
        </label>
        <label className="flex flex-col gap-1 w-full">
          <span className="flex items-center gap-1">Phone</span>
          <input
            type="tel"
            placeholder="Enter Phone"
            name="phone"
            className="h-12 px-3 border z-10 w-full py-5 outline-none rounded"
          />
        </label>
        <label className="flex flex-col gap-1 w-full">
          <span className="flex items-center gap-1">Message</span>
          <textarea
            placeholder="Enter Message"
            name="Message"
            className="h-32 px-3 border z-10 w-full py-5 outline-none rounded"
          />
        </label>
        <input
          type="hidden"
          name="_next"
          value="https://hitch-main.vercel.app"
        />
        <input type="hidden" name="_subject" value="Contact Us Form!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <nav className="flex items-center  gap-5 w-full">
          <button
            type="submit"
            className="font-[600] bg-primary text-white h-14 w-fit rounded-md px-10"
          >
            SEND MESSAGE
          </button>
        </nav>
      </form>
    </section>
  );
}
