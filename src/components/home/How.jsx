import how1 from "@/assets/how/how3.svg";
import how2 from "@/assets/how/how1.svg";
import how3 from "@/assets/how/how4.svg";
import how4 from "@/assets/how/how4.svg";
import how5 from "@/assets/how/how5.svg";
import underscore from "@/assets/underscore.svg";
import Image from "next/image";
import playstore from "@/assets/playstore.svg";
import appstore from "@/assets/appstore.svg";

export default function How() {
  return (
    <div className="px-3 md:px-24 py-10 md:py-24 flex flex-col gap-7 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          How it works
        </h3>
        <Image src={underscore} alt="" className="w-2/3 md:w-[unset]" />
      </div>
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <figure className="w-full flex flex-col gap-5 justify-center items-center">
          <Image src={how1} alt="" className="h-[90vw] md:h-[550px]" />
          <nav className="md:hidden grid grid-cols-2 gap-4 items-center">
            <Image src={playstore} alt="" />
            <Image src={appstore} alt="" />
          </nav>
        </figure>
        <div className="flex gap-3 md:gap-6 items-start">
          <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
            1
          </span>
          <div className="w-full flex flex-col gap-4 md:gap-8 ">
            <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
              Download the App
            </h4>
            <p className="text-sm md:text-2xl text-[#343D48]">
              Start your journey by downloading our app from your app store.
              Embrace the future of hassle-free living at your fingertips. {`Let's`}
              get you started on this exciting adventure!
            </p>
            <nav className="hidden md::flex gap-4 items-center">
              <Image src={playstore} alt="" />
              <Image src={appstore} alt="" />
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <div className="flex gap-3 md:gap-6 items-start">
          <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
            2
          </span>
          <div className="w-full flex flex-col gap-4 md:gap-8 ">
            <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
              Choose Your Desired Service - Tailored to Your Needs!
            </h4>
            <p className="text-sm md:text-2xl text-[#343D48]">
              Whether you need a ride, a delicious meal, a crucial package
              delivered, or your home sparkling clean, {`we've`} got you covered!
              Simply browse through our diverse array of services and choose the
              one that perfectly suits your requirements. The power of
              convenience is now in your hands!
            </p>
          </div>
        </div>
        <figure className="w-full flex justify-center items-center">
          <Image src={how2} alt="" className="h-[90vw] md:h-[550px]" />
        </figure>
      </div>
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <figure className="w-full flex justify-center items-center">
          <Image src={how3} alt="" className="h-[90vw] md:h-[550px]" />
        </figure>
        <div className="flex gap-3 md:gap-6 items-start">
          <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
            3
          </span>
          <div className="w-full flex flex-col gap-4 md:gap-8 ">
            <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
              Book Your Service - Effortless and Efficient!
            </h4>
            <p className="text-sm md:text-2xl text-[#343D48]">
              Booking your desired service is a breeze with HitchAfrica. Sit
              back and relax as you effortlessly book your transport, delivery,
              or provider services. Our user-friendly interface allows you to
              choose your preferred payment method, whether {`it's`} through your
              card, cash, or wallet. Convenience and clarity at their finest!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 items-center z-10">
        <div className="flex gap-3 md:gap-6 items-start">
          <span className="h-8 w-8 md:h-12 md:w-12 flex justify-center items-center text-white bg-primary font-[700] text-lg mt-2 md:mt-4">
            4
          </span>
          <div className="w-full flex flex-col gap-4 md:gap-8 ">
            <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
              Track Your Service - Real-time Updates, Right at Your Fingertips!
            </h4>
            <p className="text-sm md:text-2xl text-[#343D48]">
              Say goodbye to uncertainty and hello to real-time excitement! With
              HitchAfrica, you can now track your service on the go. Watch in
              awe as your transport, delivery, or provider service moves closer
              to you in real-time. . Sit back, relax, and enjoy the journey,
              knowing {`you're`} always in the know!
            </p>
          </div>
        </div>
        <figure className="w-full flex justify-center items-center">
          <Image src={how4} alt="" className="h-[90vw] md:h-[550px]" />
        </figure>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 h-fit min-h-[50vh] bg-primary items-center rounded-xl">
        <figure className="w-full h-full">
          <Image
            src={how5}
            alt=""
            className="w-full max-h-[80vh] h-full object-cover rounded-[10px_10px_0px_0px] md:rounded-[10px_0px_0px_10px]"
          />
        </figure>
        <div className="py-10 md:py-20 px-3 md:px-16 h-full w-full text-white">
          <div className="flex gap-3 md:gap-6 items-start my-auto">
            <span className="h-10 w-10 md:h-12 md:w-12 flex justify-center items-center text-primary bg-white font-[700] text-lg mt-2 md:mt-4">
              4
            </span>
            <div className="w-full flex flex-col gap-4 md:gap-8 ">
              <h4 className="text-xl md:text-[40px] font-[700] leading-normal">
                Track Your Service - Real-time Updates, Right at Your
                Fingertips!
              </h4>
              <p className="text-sm md:text-2xl">
                Say goodbye to uncertainty and hello to real-time excitement!
                With HitchAfrica, you can now track your service on the go.
                Watch in awe as your transport, delivery, or provider service
                moves closer to you in real-time. . Sit back, relax, and enjoy
                the journey, knowing {`you're`} always in the know!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
