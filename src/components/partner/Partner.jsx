import home1 from "@/assets/feature.jpeg";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              soluta, rerum ab animi eligendi unde quas eum in laborum ullam
              nostrum ad illum, ducimus, nihil facilis magnam. Ipsam, placeat
              aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Animi assumenda, voluptate quibusdam fugiat labore repellat in
              illo obcaecati quam, ex, voluptates quis velit reiciendis est
              necessitatibus molestias! Officiis, ratione culpa.
            </p>
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
            <Image src={home1} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col gap-8 bg-[#EBEBEB] p-10">
            <h3 className="text-[32px] font-[600] text-primary">
              Sign Up As Merchant
            </h3>
            <p className="text-[22px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              soluta, rerum ab animi eligendi unde quas eum in laborum ullam
              nostrum ad illum, ducimus, nihil facilis magnam. Ipsam, placeat
              aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Animi assumenda, voluptate quibusdam fugiat labore repellat in
              illo obcaecati quam, ex, voluptates quis velit reiciendis est
              necessitatibus molestias! Officiis, ratione culpa.
            </p>
            <Link
              href="https://onelink.to/9f7vr6"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              soluta, rerum ab animi eligendi unde quas eum in laborum ullam
              nostrum ad illum, ducimus, nihil facilis magnam. Ipsam, placeat
              aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Animi assumenda, voluptate quibusdam fugiat labore repellat in
              illo obcaecati quam, ex, voluptates quis velit reiciendis est
              necessitatibus molestias! Officiis, ratione culpa.
            </p>
            <Link
              href="https://onelink.to/p7vvhe"
              className="rounded-md hidden px-6 h-12 md:flex justify-center items-center bg-inherit border border-primary text-primary w-fit"
            >
              Start now
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <Image src={home1} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
