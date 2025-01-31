import React from "react";
import { Link } from "react-router-dom";
import { routingConfig } from "@constants/RoutingConfig";
import video from "@assets/video1.mp4";
import double from "../../assets/logo.png";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col overflow-hidden">
      <header className="relative z-20 mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6">
        <div className="relative">
          <Link to={routingConfig.HOME} className="flex items-center font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-start md:mb-0">
            <img className="grayscale w-14" src={double} alt="" />
          </Link>
        </div>

        <div className="flex flex-1 items-center  px-2 ml-6 justify-end">
          <div className="relative space-x-4 font-roboto">
            <Link
              to={routingConfig.PRICING}
              className="w-auto rounded-full sm:px-8 px-4 py-3 text-xs sm:text-sm font-medium text-white hover:text-[#D6FB00] "
            >
              PRICING
            </Link>
          </div>
          <div className="relative space-x-4 font-roboto">
            <Link
              to={routingConfig.REGISTER}
              className="w-auto rounded-full sm:px-8 px-4 py-3 text-xs sm:text-sm font-medium text-white hover:text-[#D6FB00]"
            >
              REGISTER
            </Link>
          </div>
          <div className="relative space-x-4 font-roboto">
            <Link
              to={routingConfig.SCHEDULE}
              className="w-auto rounded-full sm:px-8 px-4 py-3 text-xs sm:text-sm font-medium text-white hover:text-[#D6FB00]"
            >
              SCHEDULE
            </Link>
          </div>
        </div>
      </header>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none grayscale">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="relative py-10 z-20 px-10 md:px-6 h-full w-screen">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center space-y-6 text-center">
          <h1 className="font-landasans font-bold text-6xl md:text-9xl lg:text-[150px]  text-[#D6FB00] opacity-65 tracking-widest">
            WHITE CORNER BOXING ACADEMY
          </h1>
          <p className="font-roboto mx-auto max-w-2xl sm:text-lg md:text-xl md:leading-8 text-white ">Unleash Your Inner Fighter at WHITE CORNER!</p>
          <a href="#contact" className="w-full sm:w-auto bg-[#D6FB00] sm:px-10 px-4 py-3 text-md font-medium text-black ">
            Get Started
          </a>
        </div>
      </main>
    </section>
  );
};

export default Hero;
