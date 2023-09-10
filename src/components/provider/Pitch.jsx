import Image from "next/image";
import pitch1 from "@/assets/provider1.jpg";

export default function Pitch() {
  return (
    <div className="px-5 md:px-20 py-10 md:py-14 flex flex-col">
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <h4 className="text-xl md:text-[32px] font-[600]">
            Unlock Your Potential with Hitch
          </h4>
          <p className="text-lg">
            Join Hitch {`Africa's`} service provider network and take your
            career to new heights.
          </p>
          <div className="flex flex-col gap-5">
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                1
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Diverse Opportunities
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Expand Your Horizons: Explore a wide range of job
                  opportunities in your field, from tutoring to plumbing and
                  beyond.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                2
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Flexible Work
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Work on Your Terms: Set your schedule and availability, giving
                  you the flexibility you desire.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                3
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Secure Earnings
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Get Paid Securely: Our trusted payment system ensures you
                  receive your hard-earned money promptly.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                4
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Client Recognition
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Build Your Reputation: Receive feedback and ratings from
                  clients to enhance your professional standing.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                5
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Supportive Community
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Join Our Network: Become part of a supportive community of
                  service providers dedicated to excellence.
                </p>
              </div>
            </nav>
          </div>
        </div>
        <figure className="w-full flex justify-center items-center">
          <Image src={pitch1} alt="" className="w-full" />
        </figure>
      </div>
    </div>
  );
}
