import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import soc1 from '@/assets/soc1.svg';
import soc2 from '@/assets/soc2.svg';
import soc3 from '@/assets/soc3.svg';
import playstore from '@/assets/playstore.svg';
import appstore from '@/assets/appstore.svg';
import fline from '@/assets/fline.svg';
export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#000000] relative gap-10 md:gap-20 z-0 pt-10 md:pt-20 px-5 md:px-24 font-[400] text-sm md:text-base text-[rgba(255,255,255,0.70)]">
      <Image src={fline} alt="" className='absolute w-full h-full z-[-1] left-0 top-0 opacity-80' />
      <div className="gap-5  grid grid-cols-2 md:grid-cols-4">
        <nav className="flex flex-col gap-5 col-span-2 md:col-span-1">
          <Image src={logo} alt="" className=" mr-auto" />
          <nav className='flex items-center gap-3'>
            <Image src={soc1} alt="" className='h-8 w-8'/>
            <Image src={soc2} alt="" className='h-8 w-8'/>
            <Image src={soc3} alt="" className='h-8 w-8'/>
          </nav>
          <nav className='grid grid-cols-2 md:flex gap-4 items-center'>
            <Image src={playstore} alt=""  />
            <Image src={appstore} alt=""  />
          </nav>
        </nav>
        <nav className="flex flex-col md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-[600] md:font-[700] text-white">Services</h3>
            <ul className="flex flex-col gap-3">
              <Link href="/">Rides</Link>
              <Link href="/">Food delivery</Link>
              <Link href="/">Bike booking</Link>
              <Link href="/">Grocery delivery</Link>
              <Link href="/">Courier delivery</Link>
              <Link href="/">Home cleaning</Link>
              <Link href="/">Tutors</Link>
              <Link href="/">Massage</Link>
              <Link href="/">Car repair</Link>
              <Link href="/">Car wash</Link>
              <Link href="/">Security</Link>
            </ul>
          </div>
        </nav>
        <nav className="flex flex-col md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-[600] md:font-[700] text-white">Partner with Hitch Africa</h3>
            <ul className="flex flex-col gap-3">
              <Link href="/">Sign up as a driver</Link>
              <Link href="/">Sign up as a courier</Link>
              <Link href="/">Sign up as a service provider</Link>
              <Link href="/">Fleets</Link>
              <Link href="/">Franchise</Link>
            </ul>
          </div>
        </nav>
        <nav className="flex flex-col md:items-center">
          <div className="flex flex-col gap-5">
            <h3 className="font-[600] md:font-[700] text-white">Company</h3>
            <ul className="flex flex-col gap-3">
              <Link href="/about">About Us</Link>
              <Link href="/">Eco-friendly goal</Link>
              <Link href="/">Careers</Link>
              <Link href="/legal-compliance">Legal compliance</Link>
              <Link href="/">Press</Link>
              <Link href="/">Blog</Link>
              <Link href="/terms-and-condition">Terms & Condition</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-xs md:text-base py-4 md:py-8 flex flex-col gap-1 justify-center items-center text-center border-[rgba(255,255,255,0.20)] border-t">
        <span> © Hitch Africa Copyright Reserved 2023 </span>
      </div>
    </footer>
  );
}
