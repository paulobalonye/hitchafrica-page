"use client";
import Image from "next/image";
import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import rider from "@/assets/rider.svg";

const list = [
  {
    name: "",
    description: "",
  },
  {
    name: "Food Delivery",
    description:
      "Satisfy your cravings and indulge in a delightful culinary journey with our food delivery service. Whether it's a quick bite or a sumptuous feast, we bring a world of flavors right to your doorstep. From the coziest cafes to the finest dining establishments, our platform offers an extensive selection of cuisines to tantalize your taste buds. With just a few taps, you can explore menus, choose your favorites, and place an order effortlessly. Sit back, relax, and let us handle the rest—timely deliveries, careful handling, and a commitment to food that's as fresh and flavorful as dining in person. Experience the convenience of enjoying your favorite meals at home, courtesy of our seamless food delivery service.",
  },
  {
    name: "Grocery Delivery",
    description:
      "Satisfy your cravings and indulge in a delightful culinary journey with our food delivery service. Whether it's a quick bite or a sumptuous feast, we bring a world of flavors right to your doorstep. From the coziest cafes to the finest dining establishments, our platform offers an extensive selection of cuisines to tantalize your taste buds. With just a few taps, you can explore menus, choose your favorites, and place an order effortlessly. Sit back, relax, and let us handle the rest—timely deliveries, careful handling, and a commitment to food that's as fresh and flavorful as dining in person. Experience the convenience of enjoying your favorite meals at home, courtesy of our seamless food delivery service.",
  },
  {
    name: "Parcel Delivery",
    description:
      "Satisfy your cravings and indulge in a delightful culinary journey with our food delivery service. Whether it's a quick bite or a sumptuous feast, we bring a world of flavors right to your doorstep. From the coziest cafes to the finest dining establishments, our platform offers an extensive selection of cuisines to tantalize your taste buds. With just a few taps, you can explore menus, choose your favorites, and place an order effortlessly. Sit back, relax, and let us handle the rest—timely deliveries, careful handling, and a commitment to food that's as fresh and flavorful as dining in person. Experience the convenience of enjoying your favorite meals at home, courtesy of our seamless food delivery service.",
  },
  {
    name: "Home Cleaning",
    description:
      "Satisfy your cravings and indulge in a delightful culinary journey with our food delivery service. Whether it's a quick bite or a sumptuous feast, we bring a world of flavors right to your doorstep. From the coziest cafes to the finest dining establishments, our platform offers an extensive selection of cuisines to tantalize your taste buds. With just a few taps, you can explore menus, choose your favorites, and place an order effortlessly. Sit back, relax, and let us handle the rest—timely deliveries, careful handling, and a commitment to food that's as fresh and flavorful as dining in person. Experience the convenience of enjoying your favorite meals at home, courtesy of our seamless food delivery service.",
  },
];
export class MyCarousel extends Component {
  render() {
    return (
      <div className="relative py-10 min-h-fit md:h-[80vh] w-full flex justify-center items-center">
        <ReactCardCarousel autoplay={true} autoplay_speed={5000} className='w-full h-fit' style={{height: 'fit'}}>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food {`that's`} as
                fresh and flavorful as dining in person. Experience the
                convenience of enjoying your favorite meals at home, courtesy of
                our seamless food delivery service.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food {`that's`} as
                fresh and flavorful as dining in person. Experience the
                convenience of enjoying your favorite meals at home, courtesy of
                our seamless food delivery service.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food {`that's`} as
                fresh and flavorful as dining in person. Experience the
                convenience of enjoying your favorite meals at home, courtesy of
                our seamless food delivery service.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food {`that's`} as
                fresh and flavorful as dining in person. Experience the
                convenience of enjoying your favorite meals at home, courtesy of
                our seamless food delivery service.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl px-5 md:px-10 flex flex-col md:grid grid-cols-[1fr_2fr] gap-5 md:gap-7 items-center py-10 rounded-3xl bg-white">
            <figure className="w-full flex flex-col justify-center items-start gap-2 md:px-10">
              <Image src={rider} alt="" className="" />
            </figure>
            <div className="w-full flex flex-col gap-3 md:gap-5">
              <b className="text-primary text-2xl md:text-3xl">Bike Rental</b>
              <p className="text-sm md:text-lg">
                Satisfy your cravings and indulge in a delightful culinary
                journey with our food delivery service. Whether {`it's`} a quick
                bite or a sumptuous feast, we bring a world of flavors right to
                your doorstep. From the coziest cafes to the finest dining
                establishments, our platform offers an extensive selection of
                cuisines to tantalize your taste buds. With just a few taps, you
                can explore menus, choose your favorites, and place an order
                effortlessly. Sit back, relax, and let us handle the rest—timely
                deliveries, careful handling, and a commitment to food {`that's`} as
                fresh and flavorful as dining in person. Experience the
                convenience of enjoying your favorite meals at home, courtesy of
                our seamless food delivery service.
              </p>
            </div>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
