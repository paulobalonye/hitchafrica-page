import Image from "next/image";
import hero from "@/assets/hero-contact.jpeg";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
export default function Hero() {
  return (
    <div className="relative px-5 py-10 md:py-16 md:min-h-screen w-full flex flex-col gap-5 md:gap-10 items-center">
      <div className="w-full flex flex-col items-center text-center gap-4 md:gap-6">
        <h4 className="text-[32px] md:text-[64px] font-[800] leading-none text-dark">
          Contact Us
        </h4>
        <p className="text-lg font-[600]">
          Whenever you need us. We’re ready to serve you and your business.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-10">
        <Image src={hero} alt="" className="w-full md:w-[unset] h-full object-cover" />
        <div className="w-full md:w-[unset] flex flex-col gap-10 text-lg">
          <nav className="flex flex-col gap-4">
            <b className='flex gap-2 text-xl'>
              <FaEnvelope /> EMAIL
            </b>
            <div>
              <p>info@hitchafrica.com</p>
            </div>
          </nav>
          <nav className="flex flex-col gap-4">
            <b className='flex gap-2 text-xl'>
              <FaPhoneAlt /> PHONE
            </b>
            <div>
              <p>+234-705-555-4168</p>
              <p>+1-440-771-3030</p>
            </div>
          </nav>
          <nav className="flex flex-col gap-4">
            <b className='flex gap-2 text-xl'>
              <FaMapMarker /> ADDRESS
            </b>
            <div>
              <p>Ikeja Lagos</p>
              {/* <p>CA 95131, United State</p> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
