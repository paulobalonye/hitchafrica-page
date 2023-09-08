import Image from 'next/image';
import icon1 from '@/assets/icon1.svg';
import icon2 from '@/assets/icon2.svg';
import icon3 from '@/assets/icon3.svg';

export default function Values() {
  return (
    <section className="px-5 md:px-24 md:py-10 flex flex-col gap-7 md:gap-14">
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl md:text-[50px] text-dark leading-normal font-[600]">
          Our Values
        </h3>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-5">
        <Card
          title="Customer-Centric Approach"
          description="Your Needs, Our Priority. Hitch Africa is committed to a customer-centric approach. We prioritize your needs, ensuring that every service we offer is designed to enhance your experience. Our dedication to your satisfaction drives us to continually innovate and improve."
          icon={icon1}
        />
        <Card
          title="Empowerment and Growth"
          description="Unlocking Potential. At Hitch Africa, we believe in empowering our team members, partners, and communities to reach their full potential. We provide the tools, resources, and opportunities for growth, enabling everyone to thrive in their roles."
          icon={icon2}
        />
        <Card
          title="Accountability and Reliability"
          description="Delivering on Promises. We hold ourselves accountable for the commitments we make. You can rely on Hitch Africa for dependable and consistent services, whether it's a ride, a delivery, or connecting with local businesses. Our track record speaks for itself."
          icon={icon3}
        />
      </div>
    </section>
  );
}

const Card = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={icon}
        alt=""
        className="h-14 w-14 md:h-20 md:w-20"
      />
      <h4 className="text-xl md:text-2xl font-[600] text-primary">
        {title}
      </h4>
      <p className="md:text-lg">{description}</p>
    </div>
  );
};
