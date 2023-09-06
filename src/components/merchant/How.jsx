import Image from "next/image";
import pitch1 from "@/assets/asmerchant.jpg";
import Link from "next/link";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
export default function How() {
  return (
    <section className="px-5 md:px-20 py-10 md:py-14 flex flex-col">
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <figure className="w-full flex justify-center items-center">
          <Image src={pitch1} alt="" className="w-full" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <h4 className="text-xl md:text-[32px] font-[600]">
            Your Path to Merchant Success
          </h4>
          <p>
            Joining Hitch Africa as a merchant is a breeze. Follow these simple
            steps to get started:
          </p>
          <div className="flex flex-col gap-5">
            <nav className="flex gap-3 items-center">
              <span className="h-5 w-5 md:h-8 md:w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                1
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Sign Up
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Easy Registration. Begin your journey by signing up as a Hitch
                  Africa merchant. It takes just minutes to create your account.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-5 w-5 md:h-8 md:w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                2
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Customize Your Profile
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Showcase Your Business. Personalize your merchant profile with
                  photos, menus, and descriptions to make your business stand
                  out.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-5 w-5 md:h-8 md:w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                3
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Start Listing Your Offerings
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Display Your Products. List your products or services on our
                  platform, making them accessible to a wide audience of
                  potential customers.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-5 w-5 md:h-8 md:w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                4
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Connect and Thrive
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Engage with Customers. Engage with your customers, manage
                  orders efficiently, and watch your business thrive with Hitch
                  Africa.
                </p>
              </div>
            </nav>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Link
              href="https://onelink.to/hurb2a"
              className="rounded-md px-6 h-12 flex gap-1 justify-center items-center bg-inherit border border-primary text-primary w-fit"
            >
              Sign Up Now <FaGooglePlay className="text-xl" />{" "}
              <FaAppStore className="text-xl" />
            </Link>
            <p>
              Got questions or concerns?{" "}
              <Link href="/contact" className="text-primary inline">
                {" "}
                Contact us.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
