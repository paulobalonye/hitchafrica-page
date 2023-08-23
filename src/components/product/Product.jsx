import Image from "next/image";
import pay1 from "@/assets/pay/pay1.svg";
import pay2 from "@/assets/pay/pay2.svg";
import pay3 from "@/assets/pay/pay3.svg";
import icon1 from "@/assets/icon-p/icon1.jpg";
import icon2 from "@/assets/icon-p/icon2.jpg";
import icon3 from "@/assets/icon-p/icon3.jpg";
import icon4 from "@/assets/icon-p/icon4.jpg";
import icon5 from "@/assets/icon-p/icon5.jpg";
import icon6 from "@/assets/icon-p/icon6.jpg";
import { FaAppStore, FaGooglePay } from "react-icons/fa";

export default function Product() {
  return (
    <div
      className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10 md:gap-16 items-center"
      id="pricing"
    >
      <h3 className="text-dark text-[32px] md:text-[64px] leading-normal text-center font-[800]">
        Choose your plan and take your <br className="hidden md:block" />
        business to the next level
      </h3>
      <div className="w-full flex flex-col md:grid grid-cols-3 font-[500] gap-10 text-lg">
        <nav className="flex flex-col gap-4 bg-white shadow-[0px_36px_64px_0px_rgba(39,26,26,0.20)] rounded-xl w-full">
          {/* <p className="text-primary">BASIC</p> */}
          <Image
            src={icon1}
            alt=""
            className="w-full md:h-[400px] rounded-t-xl"
          />
          <div className="flex flex-col gap-5 px-5 md:px-10 py-10">
            <div className="flex flex-col gap-1">
              <b className="text-dark text-3xl font-[800]">Rides</b>
              {/* <span>Start free trial for 14 days</span> */}
            </div>
            <p>
              Enjoy the ease of reaching your destination with our dependable
              ride-hailing service. Our experienced drivers and real-time
              tracking ensure a smooth journey wherever {`you're`} headed.
            </p>
            <button className="text-primary w-full border h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center">
              Get Started Now
            </button>
          </div>
        </nav>

        <nav className="flex flex-col gap-4 bg-white shadow-[0px_36px_64px_0px_rgba(39,26,26,0.20)] rounded-xl w-full">
          {/* <p className="text-primary">STANDARD</p> */}
          <Image
            src={icon2}
            alt=""
            className="w-full md:h-[400px] rounded-t-xl"
          />
          <div className="flex flex-col gap-5 px-5 md:px-10 py-10">
            <div className="flex flex-col gap-1">
              <b className="text-dark text-3xl font-[800]">Food Delivery</b>
              {/* <span>Billed Monthly</span> */}
            </div>
            <p>
              Indulge in culinary delights without leaving your home. Experience
              the joy of having your favorite meals brought to your doorstep,
              hot and fresh.
            </p>
            <button className="text-white bg-primary w-full h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center">
              Get Started Now
            </button>
          </div>
        </nav>
        <nav className="flex flex-col gap-4 bg-white shadow-[0px_36px_64px_0px_rgba(39,26,26,0.20)] rounded-xl w-full">
          {/* <p className="text-primary">PRO</p> */}
          <Image
            src={icon3}
            alt=""
            className="w-full md:h-[400px] rounded-t-xl"
          />
          <div className="flex flex-col gap-5 px-5 md:px-10 py-10">
            <div className="flex flex-col gap-1">
              <b className="text-dark text-3xl font-[800]">Bike Booking</b>
              {/* <span>Billed Monthly</span> */}
            </div>
            <p>
              Embrace the freedom of two wheels on demand. With our bike booking
              feature, explore the city on your terms, making every ride an
              adventure.
            </p>
            <button className="text-primary w-full border h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center">
              Get Started Now
            </button>
          </div>
        </nav>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-3 font-[500] gap-10 text-lg">
        <nav className="flex flex-col gap-4 bg-white shadow-[0px_36px_64px_0px_rgba(39,26,26,0.20)] rounded-xl w-full">
          {/* <p className="text-primary">BASIC</p> */}
          <Image
            src={icon4}
            alt=""
            className="w-full md:h-[400px] rounded-t-xl"
          />
          <div className="flex flex-col gap-5 px-5 md:px-10 py-10">
            <div className="flex flex-col gap-1">
              <b className="text-dark text-3xl font-[800]">Grocery Delivery</b>
              {/* <span>Start free trial for 14 days</span> */}
            </div>
            <p>
              Skip the lines and let us handle your grocery run. With our
              efficient grocery delivery, you can shop online and receive your
              essentials without leaving the comfort of your home.
            </p>
            <button className="text-primary w-full border h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center">
              Download Now <FaGooglePay /> <FaAppStore />
            </button>
          </div>
        </nav>

        <nav className="flex flex-col gap-4 bg-white shadow-[0px_36px_64px_0px_rgba(39,26,26,0.20)] rounded-xl w-full">
          {/* <p className="text-primary">STANDARD</p> */}
          <Image
            src={icon5}
            alt=""
            className="w-full md:h-[400px] rounded-t-xl"
          />
          <div className="flex flex-col gap-5 px-5 md:px-10 py-10">
            <div className="flex flex-col gap-1">
              <b className="text-dark text-3xl font-[800]">Courier Delivery</b>
              {/* <span>Billed Monthly</span> */}
            </div>
            <p>
              Your packages deserve a reliable companion. Trust our courier
              delivery service to transport your items securely and promptly,
              with real-time updates to keep you informed.
            </p>
            <button className="text-white bg-primary w-full h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center">
              Get Started Now
            </button>
          </div>
        </nav>
        <nav className="flex flex-col gap-4 bg-white shadow-[0px_36px_64px_0px_rgba(39,26,26,0.20)] rounded-xl w-full">
          {/* <p className="text-primary">PRO</p> */}
          <Image
            src={icon6}
            alt=""
            className="w-full md:h-[400px] rounded-t-xl"
          />
          <div className="flex flex-col gap-5 px-5 md:px-10 py-10">
            <div className="flex flex-col gap-1">
              <b className="text-dark text-3xl font-[800]">Home Cleaning</b>
              {/* <span>Billed Monthly</span> */}
            </div>
            <p>
              Step into a spotless haven after a busy day. Our home cleaning
              services ensure every nook and cranny is refreshed, creating a
              clean and welcoming space for you.
            </p>
            <button className="text-primary w-full border h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center">
              Get Started Now
            </button>
          </div>
        </nav>
      </div>
      {/* <div className="text-lg flex w-full flex-col justify-center items-center gap-10 text-center px-5">
        <p>Secured by payment service</p>
        <nav className="flex gap-10 items-center">
          <Image src={pay1} alt="" />
          <Image src={pay2} alt="" />
          <Image src={pay3} alt="" />
        </nav>
      </div> */}
    </div>
  );
}
