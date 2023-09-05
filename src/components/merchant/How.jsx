import how1 from "@/assets/howw/how1.png";
import how2 from "@/assets/howw/how2.png";
import how3 from "@/assets/howw/how3.png";
import how4 from "@/assets/howw/how4.png";
import Image from "next/image";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";

export default function How() {
  return (
    <section className="px-5 md:px-24 py-10 flex flex-col gap-7 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          How it works
        </h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10">
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 items-center z-10">
          <figure className="w-full flex justify-center items-center">
            <Image
              src={how1}
              alt=""
              className="w-full md:h-[50vh] object-fill md:object-contain"
            />
          </figure>
          <div className="flex gap-3 md:gap-6 items-start">
            <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
              1
            </span>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                Sign Up
              </h4>
              <p className="md:text-lg text-[#343D48]">
                Join Our Community. Get started by signing up as a driver in our
                vibrant community.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 items-center z-10">
          <figure className="w-full flex justify-center items-center">
            <Image
              src={how2}
              alt=""
              className="w-full md:h-[50vh] object-fill md:object-contain"
            />
          </figure>
          <div className="flex gap-3 md:gap-6 items-start">
            <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
              2
            </span>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                Accept Trips
              </h4>
              <p className="md:text-lg text-[#343D48]">
                Ready to Roll. Receive ride requests and accept trips when{" "}
                {`you're`} available to drive.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 items-center z-10">
          <figure className="w-full flex justify-center items-center">
            <Image
              src={how3}
              alt=""
              className="w-full md:h-[50vh] object-fill md:object-contain"
            />
          </figure>
          <div className="flex gap-3 md:gap-6 items-start">
            <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
              3
            </span>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                Provide Excellent Service
              </h4>
              <p className="md:text-lg text-[#343D48]">
                Passenger Satisfaction. Ensure a high level of service quality
                to satisfy our passengers.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 items-center z-10">
          <figure className="w-full flex justify-center items-center">
            <Image
              src={how4}
              alt=""
              className="w-full md:h-[50vh] object-fill md:object-contain"
            />
          </figure>
          <div className="flex gap-3 md:gap-6 items-start">
            <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
              4
            </span>
            <div className="w-full flex flex-col gap-4">
              <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                Earn & Enjoy
              </h4>
              <p className="md:text-lg text-[#343D48]">
                Drive, Earn, Repeat. Hit the road, earn money, and enjoy the
                freedom of flexible driving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
