import Image from "next/image";
import abt1 from "@/assets/what.jpg";

export default function Mission() {
  return (
    <div className="relative px-5 md:px-20 py-10 w-full flex flex-col md:grid grid-cols-2 gap-5 md:gap-10 items-center">
      <div className="w-full flex flex-col md:grid grid-cols-1">
        <Image src={abt1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-6 py-10 md:py-16">
        <h4 className="text-[32px] md:text-[50px] font-[800] leading-normal text-dark">
          What We Do
        </h4>
        <p className="text-lg">
          At Hitch Africa, {`we're`} on a fast-paced growth journey, and{" "}
          {`we're`} passionate about creating opportunities for our team members
          to advance their careers. We prioritize cultivating a positive,
          collaborative, and inclusive workplace culture where innovation
          thrives.
        </p>
        <p className="text-lg">
          We value our employees and demonstrate this through competitive
          compensation packages, comprehensive benefits, including health
          coverage, retirement plans, and generous paid time off. At Hitch
          Africa, {`we're`} committed to supporting our {`team's`} professional
          development. We offer various growth opportunities, including paid
          training, mentorship programs, and tuition reimbursement, encouraging
          our employees to continually learn and evolve with us.
        </p>
      </div>
    </div>
  );
}
