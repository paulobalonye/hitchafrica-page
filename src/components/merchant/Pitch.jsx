import Image from "next/image";
import pitch1 from "@/assets/asmerchant.jpg";

export default function Pitch() {
  return (
    <div className="px-5 md:px-20 py-10 md:py-14 flex flex-col">
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <h4 className="text-xl md:text-[32px] font-[600]">
            Boost Your Business with Hitch
          </h4>
          <p>
            Join Hitch {`Africa's`} merchant network and watch your business
            thrive.
          </p>
          <div className="flex flex-col gap-5">
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                1
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Expand Reach
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Reach More Customers. Hitch Africa connects your business with
                  a broader customer base, increasing your visibility and reach.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                2
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Easy Online Presence
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Online Visibility Made Easy. Get your shop or restaurant
                  online effortlessly and showcase your offerings to a wider
                  audience.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                3
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Efficient Ordering
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Streamline Orders. Manage orders and deliveries seamlessly
                  with our user-friendly merchant app.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                4
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Customer Engagement
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Build Customer Loyalty. Engage with your customers through
                  promotions, discounts, and personalized experiences.
                </p>
              </div>
            </nav>
            <nav className="flex gap-3 items-center">
              <span className="h-8 w-8 rounded-[50%] flex justify-center items-center text-white bg-primary font-[700] text-lg">
                5
              </span>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-primary text-xl md:text-[ font-[700] leading-normal">
                  Secure Payments
                </h4>
                <p className="md:text-lg text-[#343D48]">
                  Simplify Transactions. Accept secure payments through our
                  platform and receive your earnings promptly.
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
