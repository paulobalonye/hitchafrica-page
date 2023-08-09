import Image from "next/image";
import underscore from "@/assets/underscore.svg";
import solution1 from "@/assets/solution1.jpg";
import solution2 from "@/assets/solution2.jpg";
import solution3 from "@/assets/solution3.jpg";
import solution4 from "@/assets/solution4.jpg";
import solution5 from "@/assets/solution5.jpg";
import solution6 from "@/assets/solution6.jpg";
import car from "@/assets/car.svg";
export default function Solutions() {
  return (
    <main className="px-3 md:px-20 py-10 md:py-24 flex flex-col gap-5 md:gap-14 z-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-[700] text-3xl md:text-[48px] text-primary">
          Solutions
        </h3>
        <Image src={underscore} alt="" className="w-2/3 md:w-[unset]" />
      </div>
      <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-10 items-center z-10">
        <figure className="w-full flex justify-center items-center">
          <Image src={solution1} alt="" className="w-full rounded-xl" />
        </figure>
        <div className="w-full flex flex-col gap-4 md:gap-8 ">
          <h4 className="text-primary text-xl md:text-[40px] font-[700] leading-normal">
            Effortless Commuting
          </h4>
          <p className="text-sm md:text-2xl text-[#343D48]">
            At HitchAfrica, we understand the importance of a reliable and
            comfortable transportation service. With our effortless taxi booking
            service, getting from point A to point B has never been smoother.
          </p>
          <div className="md:flex flex-col gap-3 rounded-2xl bg-white p-5 hidden">
            <h4 className="text-primary text-lg md:text-xl font-[700] leading-normal">
              A Fleet You Can Trust
            </h4>
            <p className="text-lg text-[#343D48]">
              We take pride in our diverse fleet of well-maintained vehicles.
              From compact cars perfect for solo travelers or couples to
              spacious SUVs ideal for group outings, we have the perfect ride
              for every occasion
            </p>
          </div>
          <div className="hidden md:flex items-end -translate-x-1/4">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-5">
              <h4 className="text-primary text-lg md:text-xl font-[700] leading-normal">
                Safety First
              </h4>
              <p className="text-lg text-[#343D48]">
                Your safety is our top priority. All our drivers undergo
                rigorous background checks and are trained to adhere to the
                highest safety standards. Rest assured, you are in the hands of
                skilled professionals who value your well-being.
              </p>
            </div>
            <Image
              src={car}
              alt=""
              className="-ml-[50px] translate-y-1/2 mt-auto inset-0"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-x-scroll snap md:grid grid-cols-6 gap-5 md:gap-10 md:px-20 w-full">
        <nav className="text-center flex flex-col min-w-[90%] md:min-w-[unset] md:w-full gap-3 items-center bg-white rounded-xl px-3 md:px-6 py-4 md:py-8 col-span-2">
          <Image src={solution2} alt="" />
          <b className="text-xl md:text-2xl">Food Delivery</b>
          <p className="text-sm md:text-lg">
            Feeling hungry? Craving your favorite cuisine? Our food delivery
            service brings a world of flavors to your doorstep. Just choose,
            order, and savor the delights from your favorite restaurants.
          </p>
        </nav>
        <nav className="text-center flex flex-col min-w-[90%] md:min-w-[unset] md:w-full gap-3 items-center bg-white rounded-xl px-3 md:px-6 py-4 md:py-8 col-span-2">
          <Image src={solution3} alt="" />
          <b className="text-xl md:text-2xl">Bike Rental</b>
          <p className="text-sm md:text-lg">
            Embrace the eco-friendly way of commuting with our bike booking
            service. Enjoy the breeze and beat the traffic while reducing your
            carbon footprint. Convenience and sustainability - all in one!
          </p>
        </nav>
        <nav className="text-center flex flex-col min-w-[90%] md:min-w-[unset] md:w-full gap-3 items-center bg-white rounded-xl px-3 md:px-6 py-4 md:py-8 col-span-2">
          <Image src={solution4} alt="" />
          <b className="text-xl md:text-2xl">Grocery Shopping</b>
          <p className="text-sm md:text-lg">
            Grocery shopping made hassle-free! With our grocery delivery
            service, you can browse through a wide range of products, add them
            to your cart, and have them delivered right to your kitchen.
          </p>
        </nav>
        <nav className="text-center flex flex-col min-w-[90%] md:min-w-[unset] md:w-full gap-3 items-center bg-white rounded-xl px-3 md:px-6 py-4 md:py-8 col-start-2 col-span-2">
          <Image src={solution5} alt="" />
          <b className="text-xl md:text-2xl">Parcel Delivery</b>
          <p className="text-sm md:text-lg">
            Need to send a package urgently? Our courier delivery service
            ensures your parcels reach their destination securely and on time.
            Trust us to handle your deliveries with utmost care and efficiency.
          </p>
        </nav>
        <nav className="text-center flex flex-col min-w-[90%] md:min-w-[unset] md:w-full gap-3 items-center bg-white rounded-xl px-3 md:px-6 py-4 md:py-8 col-end-6 col-span-2">
          <Image src={solution6} alt="" />
          <b className="text-xl md:text-2xl">Home Cleaning</b>
          <p className="text-sm md:text-lg">
            Sit back, relax, and let us take care of your home. Our home
            cleaning service guarantees a spotless and sanitized living space,
            giving you more time to enjoy the things you love.
          </p>
        </nav>
      </div>
    </main>
  );
}
