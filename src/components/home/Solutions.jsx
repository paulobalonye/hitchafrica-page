import Image from "next/image";
import Link from "next/link";
import feature from "@/assets/howw/how4.png";
import bar from "@/assets/chart.svg";
import dash from "@/assets/dash.svg";

export default function Solutions() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-5 md:gap-14 z-10">
      <div className="w-full flex flex-col md:flex-row justify-evenly gap-8 md:gap-20 items-center z-10">
        <div className="md:hidden flex flex-col gap-5">
          <p className="text-primary">OUR FEATURES</p>
          <h4 className="text-[#0B1621] text-2xl font-[800] leading-normal">
          Seamless Services for Your Every Need: Hitch, Deliver, Excel.
          </h4>
        </div>
        <figure className="w-full flex h-full justify-center items-center">
          <Image src={feature} alt="" className=" md:h-[80vh] object-fill md:object-contain w-full md:w-[unset]"/>
        </figure>
        <div className="w-full flex flex-col gap-5 md:gap-14">
          <p className="text-primary hidden md:block">OUR FEATURES</p>
          <h4 className="hidden md:block text-[#0B1621] text-xl md:text-[48px] font-[800] leading-normal">
            Seamless Services for Your Every Need: Hitch, Deliver, Excel.
          </h4>
          <div className="flex flex-col md:grid grid-cols-2 gap-5">
            <nav className="flex gap-4 items-start">
              <Image src={bar} alt="" />
              <div className="flex flex-col gap-4">
                <b className="text-xl font-[800]">Effortless Rides</b>
                <p>
                  Quick and Easy Booking, Experienced and Friendly Drivers,
                  Real-time Ride Tracking
                </p>
              </div>
            </nav>
            <nav className="flex gap-4 items-start">
              <Image src={dash} alt="" />
              <div className="flex flex-col gap-4">
                <b className="text-xl font-[800]">Swift Deliveries</b>
                <p>
                  Express Package Delivery, Food Delivered Fresh and Fast,
                  Secure and Tracked Shipments.
                </p>
              </div>
            </nav>
          </div>
          <Link href='/product' className="rounded-xl bg-primary px-8 h-14 text-white w-fit flex justify-center items-center">
            View Products
          </Link>
        </div>
      </div>
    </main>
  );
}
