import hero from "@/assets/map.jpeg";
export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat z-0 min-h-[100vh] flex flex-col md:grid grid-cols-2 gap-5 md:gap-14 items-center justify-center px-5 md:px-20 "
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="w-full flex flex-col items-start leading-normal gap-4 md:gap-2 text-white">
          <h2 className="text-[30px] md:text-[60px]">
            Drive Your Way to Success
          </h2>
          <p className="md:text-xl leading-normal">
            Join our community of drivers and embark on a journey of
            <br className="hidden md:block" />
            flexibility, earnings, and endless possibilities.
          </p>
        </div>
        <form className="hidden md:flex flex-col text-[#121212] bg-white md:px-10 py-8 gap-10 rounded-3xl px-5 w-full shadow-xl">
          <h4 className="font-semibold text-[22px]">Make an Order</h4>
          <label className="flex flex-col gap-2">
            <span>Phone Number</span>
            <input
              type="tel"
              className="border border-[#B6B6B6] bg-inherit rounded-md px-5 h-12 placeholder:text-[#414141]"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Email Address</span>
            <input
              type="email"
              className="border border-[#B6B6B6] bg-inherit rounded-md px-5 h-12 placeholder:text-[#414141]"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>City</span>
            <select className="border border-[#B6B6B6] bg-inherit rounded-md px-5 h-12 placeholder:text-[#414141]">
              <option disabled selected>
                --Select City--
              </option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">Federal Capital Territory</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
          </label>
          <button className="bg-primary hover:bg-dark text-white w-full h-14 rounded-md transition-colors duration-1000 font-[600] ease-in-out">
            Join Now
          </button>
        </form>
        <div className="absolute top-0 left-0 w-full h-full  bg-[rgba(18,18,18,0.8)] backdrop-blur-[5px] z-[-1]"></div>
      </section>
      <section className="px-5 translate-y-[-10%] md:hidden">
        <form className="z-[99999] flex flex-col text-[#121212] bg-white md:px-10 py-8 gap-5 rounded-3xl px-5 w-full md:w-[40%] shadow-lg">
          <h4 className="font-semibold text-[22px]">Make an Order</h4>
          <label className="flex flex-col gap-2">
            <span>Phone Number</span>
            <input
              type="tel"
              className="border border-[#B6B6B6] bg-inherit rounded-md px-5 h-12 placeholder:text-[#414141]"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Email Address</span>
            <input
              type="email"
              className="border border-[#B6B6B6] bg-inherit rounded-md px-5 h-12 placeholder:text-[#414141]"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>City</span>
            <select className="border border-[#B6B6B6] bg-inherit rounded-md px-5 h-12 placeholder:text-[#414141]">
              <option disabled selected>
                --Select State--
              </option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">Federal Capital Territory</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
          </label>
          <button className="bg-primary hover:bg-dark text-white w-full h-14 rounded-md transition-colors duration-1000 font-[600] ease-in-out">
            Join Now
          </button>
        </form>
      </section>
    </>
  );
}
