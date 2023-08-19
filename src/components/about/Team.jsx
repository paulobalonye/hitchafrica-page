import Image from "next/image";
import team1 from '@/assets/team/team1.jpg'
import team2 from '@/assets/team/team2.jpg'
import team3 from '@/assets/team/team3.jpg'
import team4 from '@/assets/team/team4.jpg'
import team5 from '@/assets/team/team5.jpg'
import team6 from '@/assets/team/team6.jpg'

export default function Team() {
  return (
    <main className="py-10 md:py-20 px-5 md:px-20 flex flex-col gap-10 md:gap-14">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <nav className="flex flex-col gap-4 text-xl">
          <b className="text-[32px] md:text-[36px] font-[800] text-dark leading-normal">
            The best for our <br className="hidden md:block" />
            beloved client.
          </b>
          <p>And we are the best</p>
        </nav>
        <p className="text-xl">
          Our expertise in software development encompasses a wide{" "}
          <br className="hidden md:block" /> range of programming languages and
          platforms, including <br className="hidden md:block" /> mobile app
          development, web development, and custom{" "}
          <br className="hidden md:block" /> software development.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:grid grid-cols-4">
        <nav className="flex flex-col justify-center gap-4 text-xl md:px-10 col-span-2">
          <b className="font-[800]">THE TEAM</b>
          <b className="text-3xl md:text-[36px] font-[800] text-dark leading-normal">
            The best for our <br className="hidden md:block" />
            beloved client.
          </b>
          <p>And we are the best</p>
        </nav>
        <Image src={team1} alt="" className="w-full h-full" />
        <Image src={team2} alt="" className="w-full h-full" />
        <Image src={team3} alt="" className="w-full h-full" />
        <Image src={team4} alt="" className="w-full h-full" />
        <Image src={team5} alt="" className="w-full h-full" />
        <Image src={team6} alt="" className="w-full h-full" />
      </div>
    </main>
  );
}
