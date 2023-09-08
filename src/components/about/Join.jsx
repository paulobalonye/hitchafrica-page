import Image from 'next/image';
import hero from '@/assets/join.png';
import { FaChevronCircleRight } from 'react-icons/fa';
import bg1 from '@/assets/comebg1.svg';
import bg2 from '@/assets/comebg2.svg';
export default function Join() {
  return (
    <section className="px-5 md:px-24 py-10 flex flex-col gap-7 md:gap-14 bg-primary text-white relative">
      <Image
        src={bg1}
        alt=""
        className="absolute left-0 bottom-0 hidden md:block"
      />
      <Image
        src={bg2}
        alt=""
        className="absolute right-0 top-0 hidden md:block"
      />
      <div className="flex flex-col gap-5 mx-auto text-center">
        <h3 className="text-2xl md:text-[40px] text-center leading-normal font-[600]">
          Come Work with Us
        </h3>
        <p className="md:text-lg">
          Join us in doing work that truly matters alongside
          supportive, intelligent coworkers
          <br className="hidden md:block" />
          who are committed to helping you grow and develop.
        </p>
      </div>
      <p className="mx-auto flex gap-2 items-center text-lg">
        <FaChevronCircleRight /> Join Us
      </p>
      <figure className="mx-auto w-full md:w-1/4">
        <Image src={hero} alt="" className="object-contain" />
      </figure>
    </section>
  );
}
