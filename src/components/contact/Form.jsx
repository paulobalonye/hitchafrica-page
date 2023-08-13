import React from "react";

export default function Form() {
  return (
    <main className="flex flex-col">
      <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly items-center py-10 md:py-28 bg-primary">
        <b className="text-3xl md:text-[40px] font-[700] text-white">Customer Support</b>
        <button className="px-14 py-4 text-lg bg-white text-primary rounded-lg font-[600]">
          Contact Us
        </button>
      </div>
      <div className="bg-[#1C595C] text-white px-5 flex justify-center py-14 md:py-20">
        <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center items-center text-center md:text-start">
          <b className="text-3xl md:text-[40px] font-[700] leading-none">Contact Form</b>
          <p className='text-lg'>We’re Open for any suggestion or just to have a chat</p>
          <form className='flex flex-col gap-10 w-full items-center'>
            <input type="text" className="h-12 w-full px-5 placeholder:text-[rgba(255,255,255,0.50)] bg-inherit rounded-md border-2 border-white" placeholder="Full Name" />
            <input type="email" className="h-12 w-full px-5 placeholder:text-[rgba(255,255,255,0.50)] bg-inherit rounded-md border-2 border-white" placeholder="Email" />
            <textarea
              placeholder="Message"
              className="h-32 px-5 border-2 w-full py-5 outline-none rounded-md placeholder:text-[rgba(255,255,255,0.50)] bg-inherit border-white"
            />
            <button className='border border-white h-12 px-5 w-fit text-lg font-[600] rounded-md'>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </main>
  );
}
