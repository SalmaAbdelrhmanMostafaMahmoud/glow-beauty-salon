import React from "react";

export default function Hero() {
  return (
    <>
      <header>
        <h1 className="sr-only">Glow Salon</h1>
      </header>

<section className="hero-section w-full h-[85vh] md:h-[85vh] min-h-[500px] max-h-[750px] relative overflow-hidden">        {/* background image */}
        <img 
          src="/hero.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] sm:object-[center_10%]"
        />

        {/* overlay - lighter, more contained gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent z-10"></div>

        {/* content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="lg:ps-12 md:ps-10 ms-5 max-w-lg p-3">
            <h2 className="font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4A1525] overflow-visible leading-tight">
              Let Your Glow
              <br />
              {" "}Shine Through
            </h2>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#8C4A5D] mt-5 max-w-xl">
              Premium salon services tailored
              <br />
              {" "}to bring out your natural radiance
            </p>
            <button 
              type="button" 
              className="mt-6 px-8 py-3.5 bg-[#9E3656] hover:bg-[#6A2238] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-white text-sm md:text-base font-medium rounded-full shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}