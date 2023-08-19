import bg from "@/assets/wave.svg";
import { FaCheck } from "react-icons/fa";
export default function Join() {
  return (
    <section
      className="px-5 md:px-20 py-10 md:py-20 bg-cover bg-center bg-no-repeat text-center md:min-h-[70vh] text-white flex flex-col gap-10 relative items-center justify-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <p className="text-primary">NEWSLETTER</p>
      <h3 className="text-3xl md:text-[48px] font-[800] text-dark leading-normal">
        Join to get <br className="hidden md:block" /> exclusive contents.
      </h3>
      <form className="w-full md:w-1/3 flex flex-col gap-5 items-center justify-center text-dark">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-inherit rounded-md w-full h-12 md:h-14 px-5 border outline-none placeholder:text-[#A4A4A4] placeholder:text-sm"
        />
        <button
          className={`text-white rounded-md w-full h-12 md:h-14 px-4 md:px-8 font-[500] bg-primary outline-none `}
        >
          Join Now
        </button>
      </form>
      <div className='text-[#020202] flex flex-col md:flex-row items-center text-center justify-center gap-10 items-center text-xl'>
        <p className="flex items-center gap-2">
          <FaCheck className="text-primary" />
          Weekly reports
        </p>
        <p className="flex items-center gap-2">
          <FaCheck className="text-primary" />
          Unlimited free resources
        </p>
        <p className="flex items-center gap-2">
          <FaCheck className="text-primary" />
          Premium contents
        </p>
      </div>
    </section>
  );
}
