import Image from "next/image";
import team1 from "@/assets/team/team1.jpg";
import team2 from "@/assets/team/team2.jpg";
import team3 from "@/assets/team/team3.jpg";
import team4 from "@/assets/team/team4.jpg";
import team5 from "@/assets/team/team5.jpg";

export default function Team() {
  return (
    <main className="py-10 md:py-20 px-5 md:px-20 flex flex-col gap-10 md:gap-14">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <nav className="flex flex-col gap-4 text-xl">
          <b className="text-[32px] md:text-[36px] font-[800] text-dark leading-normal">
            The Hitch Team
          </b>
          {/* <p>And we are the best</p> */}
        </nav>
        <p className="text-xl">
          Meet the Faces Behind Hitch Africa: A Dedicated
          <br className="hidden md:block" />
          Team of Professionals Committed to Enhancing
          <br className="hidden md:block" />
          Your Every Interaction.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:grid grid-cols-4">
        {/* <nav className="flex flex-col justify-center gap-4 text-xl md:px-10">
          <b className="font-[800]">THE TEAM</b>
          <b className="text-3xl md:text-[36px] font-[800] text-dark leading-normal">
            The Hitch Team
          </b>
          <p>And we are the best</p>
        </nav> */}
        <figure className="flex flex-col w-full h-full">
          <Image src={team1} alt="" className="w-full h-full" />{" "}
          <figcaption className="w-full py-4 bg-dark text-center text-white font=[600] flex flex-col gap-1 justify-center items-center">
            <b className='text-lg font-[600]'>Paul Obalonye</b>
            <span>Founder/CEO</span>
          </figcaption>{" "}
        </figure>
        <figure className="flex flex-col w-full h-full">
          <Image src={team2} alt="" className="w-full h-full" />{" "}
          <figcaption className="w-full py-4 bg-dark text-center text-white font=[600] flex flex-col gap-1 justify-center items-center">
            <b className='text-lg font-[600]'>Samuel Owadayo</b>
            <span>Chief Technology Officer</span>
          </figcaption>{" "}
        </figure>
        <figure className="flex flex-col w-full h-full">
          <Image src={team3} alt="" className="w-full h-full" />{" "}
          <figcaption className="w-full py-4 bg-dark text-center text-white font=[600] flex flex-col gap-1 justify-center items-center">
            <b className='text-lg font-[600]'>Austin Daniels</b>
            <span>Chief Marketing Officer</span>
          </figcaption>{" "}
        </figure>
        <figure className="flex flex-col w-full h-full">
          <Image src={team4} alt="" className="w-full h-full" />{" "}
          <figcaption className="w-full py-4 bg-dark text-center text-white font=[600] flex flex-col gap-1 justify-center items-center">
            <b className='text-lg font-[600]'>Ajibade Victoria</b>
            <span>Snr Product Manager</span>
          </figcaption>{" "}
        </figure>
        {/* <figure className="flex flex-col w-full h-full">
          <Image src={team5} alt="" className="w-full h-full" />{" "}
          <figcaption className="w-full py-4 bg-dark text-center text-white font=[600] flex flex-col gap-1 justify-center items-center">
            <b className='text-lg font-[600]'> John Doe</b>
            <span>CEO</span>
          </figcaption>{" "}
        </figure> */}
      </div>
    </main>
  );
}
