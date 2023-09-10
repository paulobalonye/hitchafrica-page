import Image from "next/image";
import pitch1 from "@/assets/provider2.png";
import Link from "next/link";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
export default function How() {
  return (
    <section className="px-5 md:px-20 py-10 md:py-14 flex flex-col bg-primary text-white rounded-tl-3xl rounded-br-3xl md:rounded-tl-[100px] md:rounded-br-[100px]">
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <figure className="w-full flex justify-center items-center">
          <Image src={pitch1} alt="" className="w-full" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <h4 className="text-xl md:text-[32px] font-[600]">
            Elevate Your Career with Hitch Africa
          </h4>
          <p className="text-lg">
            Join our platform of skilled professionals, connect with clients in
            need of your expertise, and take your career to new heights with
            Hitch Africa.
          </p>
          <div className="flex flex-col gap-5">
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-primary bg-white font-[700] text-lg">
                1
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className=" text-xl md:text-[ font-[700] leading-normal">
                  Sign Up
                </h4>
                <p className="md:text-lg">
                  Easy Registration: Begin your journey by signing up as a Hitch
                  Africa service provider. It only takes a few minutes to create
                  your account.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-primary bg-white font-[700] text-lg">
                2
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className=" text-xl md:text-[ font-[700] leading-normal">
                  Customize Your Profile
                </h4>
                <p className="md:text-lg">
                  Showcase Your Skills: Personalize your profile with details
                  about your expertise, experience, and skills. Add high-quality
                  photos to make your profile stand out.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-primary bg-white font-[700] text-lg">
                3
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className=" text-xl md:text-[ font-[700] leading-normal">
                  Set Your Services and Rates
                </h4>
                <p className="md:text-lg">
                  Define Your Offerings: List the services you provide and set
                  your rates. You have full control over your pricing.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-primary bg-white font-[700] text-lg">
                4
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className=" text-xl md:text-[ font-[700] leading-normal">
                  Accept Jobs and Engage
                </h4>
                <p className="md:text-lg">
                  Connect with Clients: Browse job listings, accept requests
                  from clients, and engage with them to understand their needs.
                </p>
              </div>
            </nav>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Link
              href="https://onelink.to/hurb2a"
              className="rounded-md px-6 h-12 flex gap-1 justify-center items-center bg-inherit border border-white  w-fit"
            >
              Sign Up Now <FaGooglePlay className="text-xl" />{" "}
              <FaAppStore className="text-xl" />
            </Link>
            <p>
              Got questions or concerns?{" "}
              <Link href="/contact" className="inline">
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
