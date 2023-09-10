import hero from "@/assets/hero-service.jpeg";
export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat z-0 min-h-[100vh] flex flex-col  gap-5 md:gap-14 items-center justify-center px-5 md:px-20 "
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="text-center flex flex-col items-center leading-normal gap-4 md:gap-2 text-white">
          <h2 className="text-[30px] md:text-[60px]">
          Unlock Your Potential with Hitch
          </h2>
          <p className="md:text-xl leading-normal">
          Join our network of skilled service providers and <br className="hidden md:block" /> connect with clients in need of your expertise.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full  bg-[rgba(18,18,18,0.8)] backdrop-blur-[5px] z-[-1]"></div>
      </section>
          </>
  );
}
