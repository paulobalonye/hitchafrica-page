export default function Pricing() {
  return (
    <div className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-7 items-center"
    id="pricing">
      <h3 className="text-dark text-2xl md:text-[64px] leading-normal text-center font-[800]">
      Choose your plan and take your <br className='hidden md:block' /> business to the next level
      </h3>
      <div className="md:mt-24 text-sm md:text-base w-full flex flex-col md:grid grid-cols-3 font-[500] gap-8">
        <nav className="flex flex-col gap-10 bg-white shadow-2xl rounded-xl px-4 md:px-8 py-8 w-full">
          <p className="text-primary">BASIC</p>
          <div className="flex flex-col gap-1">
            <b className="text-dark text-[28px] font-[800]">Free</b>
            <span>Start free trial for 14 days</span>
          </div>
        <p>Unlimited task to your unlimited team members. The basic is the best for early business.</p>
          <button
            className="text-primary w-full border h-10 md:h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center"
          >
            Get Started Now
          </button>
        </nav>

        <nav className="flex flex-col gap-10 bg-white shadow-2xl rounded-xl px-4 md:px-8 py-8 w-full">
          <p className="text-primary">BASIC</p>
          <div className="flex flex-col gap-1">
            <b className="text-dark text-[28px] font-[800]">Free</b>
            <span>Start free trial for 14 days</span>
          </div>
        <p>Unlimited task to your unlimited team members. The basic is the best for early business.</p>
          <button
            className="text-primary w-full border h-10 md:h-14 px-10 rounded-xl font-[500] bg-inherit outline-none flex justify-center items-center"
          >
            Get Started Now
          </button>
        </nav>
        
      </div>
    </div>
  );
}
