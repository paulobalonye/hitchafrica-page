import home1 from "@/assets/asdriver.jpg";
import home2 from "@/assets/asmerchant.jpg";
import home3 from "@/assets/assprovider.jpg";
import Image from "next/image";
import Link from "next/link";
// import part1 from '@/assets/partner1.jpg'
// import part2 from '@/assets/partner2.jpg'
// import part3 from '@/assets/partner3.jpg'

export default function About() {
  return (
    <main>
      <section className="px-5 md:px-20 py-10 md:py-20 flex flex-col items-center gap-10 ">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-8 bg-[#EBEBEB] p-10">
            <h3 className="text-[32px] font-[600] text-primary">
              Sign Up As Driver
            </h3>
            <p className="text-[22px]">
            Embark on a new journey by joining Hitch Africa as a driver. Whether {`you're`} looking for a flexible side gig or a full-time opportunity, our platform makes it easy to get started. Simply provide us with your information, upload the necessary documents like your {`driver's`} license and insurance, and follow our straightforward onboarding process. As a driver, {`you'll`} have the chance to earn on your own terms, while enjoying the benefits of a supportive community and advanced tools to enhance your experience.</p>
            <Link
              href="https://onelink.to/hurb2a"
              className="rounded-md hidden px-6 h-12 md:flex justify-center items-center bg-inherit border border-primary text-primary w-fit"
            >
              Start now
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <Image src={home1} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 gap-10">
          <div className="grid grid-cols-1 gap-10">
            <Image src={home2} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col gap-8 bg-[#EBEBEB] p-10">
            <h3 className="text-[32px] font-[600] text-primary">
              Sign Up As Merchant
            </h3>
            <p className="text-[22px]">
            Elevate your business by becoming a valued merchant on the Hitch Africa platform. Showcase your restaurant, shop, or establishment to a wider audience through our user-friendly registration process. Tell us about your offerings, share captivating images, and provide the essential information that potential customers need to know. By partnering with Hitch Africa, you open the door to increased visibility, customer engagement, and the opportunity to grow your sales with a seamless online presence.</p>
            <Link
              href="/partner-with-us"
              className="rounded-md hidden px-6 h-12 md:flex justify-center items-center bg-inherit border border-primary text-primary w-fit"
            >
              Start now
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-8 bg-[#EBEBEB] p-10">
            <h3 className="text-[32px] font-[600] text-primary">
              Sign Up As Service Provider
            </h3>
            <p className="text-[22px]">
            Are you a skilled professional seeking to connect with those in need of your services? Joining Hitch Africa as a service provider is your gateway to expanding your clientele and boosting your business. Craft a compelling profile that highlights your expertise, qualifications, and accomplishments. Whether {`you're`} a tutor ready to ignite the spark of learning, an electrician capable of solving complex problems, or a plumber ensuring seamless home systems, Hitch Africa empowers you to showcase your skills and be discovered by users seeking your specific talents. Our platform streamlines the process of receiving service requests, managing appointments, and growing your reputation in your field. Join our network of skilled service providers and make a lasting impact on those you serve.</p>
            <Link
              href="https://onelink.to/p7vvhe"
              className="rounded-md hidden px-6 h-12 md:flex justify-center items-center bg-inherit border border-primary text-primary w-fit"
            >
              Start now
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <Image src={home3} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
