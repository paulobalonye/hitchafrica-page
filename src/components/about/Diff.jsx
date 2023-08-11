import Image from "next/image";
import service1 from "@/assets/services/service1.svg";
import service2 from "@/assets/services/service2.svg";
import service3 from "@/assets/services/service3.svg";
import service4 from "@/assets/services/service4.svg";
import service5 from "@/assets/services/service5.svg";
import service6 from "@/assets/services/service6.svg";

export default function Diff() {
  return (
    <main className="flex flex-col">
      <div className="w-full my-10 px-5 md:px-24 py-10 md:py-20 flex flex-col md:grid grid-cols-2 gap-5 md:gap-10 items-center z-10 bg-[#C0D1D2] rounded-tl-[100px] rounded-br-[100px]">
        <div className="w-full flex flex-col gap-4 md:pl-10">
          <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
            Unmatched Convenience and Exceptional Quality - The Hitch Difference
          </h4>
          <p className="text-sm md:text-xl text-[#343D48]">
            What makes Hitch truly stand out is our unwavering dedication to
            providing unmatched convenience and exceptional quality in
            everything we do. Unlike other services, we bring a diverse range of
            offerings under one intuitive platform, eliminating the need to
            juggle multiple apps or websites. Our commitment to excellence
            drives us to deliver top-notch services tailored to your
            preferences. Whether {`you're`} a busy professional, a student on
            the go, or a family looking for convenience, Hitch is here to
            enhance your daily experiences. Embrace the ease of one app, one
            platform, and countless possibilities—choose Hitch today!
          </p>
          <button className="rounded-md px-10 h-12 bg-[#CB1F52] text-white w-fit">
            Sign Up Now!
          </button>
        </div>
        <figure className="w-full flex justify-center items-center">
          <Image src={service1} alt="" className="h-[90vw] md:h-[unset]" />
        </figure>
      </div>
      <div className="w-full px-5 md:px-24 text-white flex flex-col md:grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center z-10 bg-[#808787] py-10 md:py-20 rounded-tl-[100px] rounded-br-[100px]">
        <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
          <b className="text-2xl md:text-[40px]">Food Delivery</b>
          <Image src={service2} alt="" className="h-[298px]" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 pr-10">
          <p className="text-sm md:text-xl leading-loose">
            Satisfy your cravings and indulge in a delightful culinary journey
            with our food delivery service. Whether {`it's`} a quick bite or a
            sumptuous feast, we bring a world of flavors right to your doorstep.
            From the coziest cafes to the finest dining establishments, our
            platform offers an extensive selection of cuisines to tantalize your
            taste buds. With just a few taps, you can explore menus, choose your
            favorites, and place an order effortlessly. Sit back, relax, and let
            us handle the rest—timely deliveries, careful handling, and a
            commitment to food {`that's`} as fresh and flavorful as dining in
            person. Experience the convenience of enjoying your favorite meals
            at home, courtesy of our seamless food delivery service.
          </p>
        </div>
      </div>
      <div className="w-full px-5 md:px-24 text-white flex flex-col md:grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center z-10 bg-[#1C595C] py-10 md:py-20 rounded-tl-[100px] rounded-br-[100px]">
        <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
          <b className="text-2xl md:text-[40px]">Bike Rental</b>
          <Image src={service3} alt="" className="h-[298px]" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 pr-10">
          <p className="text-sm md:text-xl leading-loose">
            Satisfy your cravings and indulge in a delightful culinary journey
            with our food delivery service. Whether {`it's`} a quick bite or a
            sumptuous feast, we bring a world of flavors right to your doorstep.
            From the coziest cafes to the finest dining establishments, our
            platform offers an extensive selection of cuisines to tantalize your
            taste buds. With just a few taps, you can explore menus, choose your
            favorites, and place an order effortlessly. Sit back, relax, and let
            us handle the rest—timely deliveries, careful handling, and a
            commitment to food {`that's`} as fresh and flavorful as dining in
            person. Experience the convenience of enjoying your favorite meals
            at home, courtesy of our seamless food delivery service.
          </p>
        </div>
      </div>
      <div className="w-full px-5 md:px-24 text-white flex flex-col md:grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center z-10 bg-[#4F7E80] py-10 md:py-20 rounded-tl-[100px] rounded-br-[100px]">
        <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
          <b className="text-2xl md:text-[40px]">Grocery Shopping</b>
          <Image src={service4} alt="" className="h-[298px]" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 pr-10">
          <p className="text-sm md:text-xl leading-loose">
            Satisfy your cravings and indulge in a delightful culinary journey
            with our food delivery service. Whether {`it's`} a quick bite or a
            sumptuous feast, we bring a world of flavors right to your doorstep.
            From the coziest cafes to the finest dining establishments, our
            platform offers an extensive selection of cuisines to tantalize your
            taste buds. With just a few taps, you can explore menus, choose your
            favorites, and place an order effortlessly. Sit back, relax, and let
            us handle the rest—timely deliveries, careful handling, and a
            commitment to food {`that's`} as fresh and flavorful as dining in
            person. Experience the convenience of enjoying your favorite meals
            at home, courtesy of our seamless food delivery service.
          </p>
        </div>
      </div>
      <div className="w-full px-5 md:px-24 text-white flex flex-col md:grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center z-10 bg-[#356B6E] py-10 md:py-20 rounded-tl-[100px] rounded-br-[100px]">
        <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
          <b className="text-2xl md:text-[40px]">Parcel Delivery</b>
          <Image src={service5} alt="" className="h-[298px]" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 pr-10">
          <p className="text-sm md:text-xl leading-loose">
            Satisfy your cravings and indulge in a delightful culinary journey
            with our food delivery service. Whether {`it's`} a quick bite or a
            sumptuous feast, we bring a world of flavors right to your doorstep.
            From the coziest cafes to the finest dining establishments, our
            platform offers an extensive selection of cuisines to tantalize your
            taste buds. With just a few taps, you can explore menus, choose your
            favorites, and place an order effortlessly. Sit back, relax, and let
            us handle the rest—timely deliveries, careful handling, and a
            commitment to food {`that's`} as fresh and flavorful as dining in
            person. Experience the convenience of enjoying your favorite meals
            at home, courtesy of our seamless food delivery service.
          </p>
        </div>
      </div>
      <div className="w-full px-5 md:px-24 text-white flex flex-col md:grid grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center z-10 bg-[#033F43] py-10 md:py-20 rounded-tl-[100px] rounded-br-[100px]">
        <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
          <b className="text-2xl md:text-[40px]">Home Cleaning</b>
          <Image src={service6} alt="" className="h-[298px]" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 pr-10">
          <p className="text-sm md:text-xl leading-loose">
            Satisfy your cravings and indulge in a delightful culinary journey
            with our food delivery service. Whether {`it's`} a quick bite or a
            sumptuous feast, we bring a world of flavors right to your doorstep.
            From the coziest cafes to the finest dining establishments, our
            platform offers an extensive selection of cuisines to tantalize your
            taste buds. With just a few taps, you can explore menus, choose your
            favorites, and place an order effortlessly. Sit back, relax, and let
            us handle the rest—timely deliveries, careful handling, and a
            commitment to food {`that's`} as fresh and flavorful as dining in
            person. Experience the convenience of enjoying your favorite meals
            at home, courtesy of our seamless food delivery service.
          </p>
        </div>
      </div>
    </main>
  );
}
