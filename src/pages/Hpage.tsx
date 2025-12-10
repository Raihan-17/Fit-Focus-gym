import { FC } from "react";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import { Link } from "react-router-dom";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Hpage: FC<Props> = ({ setSelectedPage }) => {
  return (
    <section  className="w-full  bg-amber-50 dark:bg-ray-900 ">
    
      <div className="mx-auto w-11/12 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT part */}
        <div
          className="md:w-3/5 z-10 mt-12"
          data-aos="fade-right"
        >
          <img
            src={HomePageText}
            alt="Home Text"
            className="w-[280px] md:w-[450px]"
          />

          <p className="mt-8 text-sm text-gray-700 dark:text-gray-300">
            Unrivaled Gym. Unparalleled Training. World-class Fitness Classes.
            Get the body shape you dream of — start your journey now.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex items-center gap-8">
            <button
              onClick={() => setSelectedPage("join")}
              className="px-6 py-3 bg-red-900 hover:bg-red-700 text-white rounded-lg shadow-lg hover:shadow-red-500 transition"
            >
              Join Now
            </button>

            <Link
              to="/contact"
              onClick={() => setSelectedPage("contact")}
              className="text-sm font-bold text-red-700 underline hover:text-red-500"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="md:w-3/5 flex justify-center mt-12 md:mt-0"
          data-aos="fade-left"
        >
          <img
            src={HomePageGraphic}
            alt="Home Graphic"
            className="w-[350px] md:w-[500px]"
          />
        </div>
      </div>

      {/* SPONSORS, Visible only on large screens */}
      <div className="hidden md:block w-full bg-gray-100 dark:bg-gray-00 py-10 mt-5">
        <div className="mx-auto w-5/6 flex items-center justify-between gap-6">
          <img
            src={SponsorRedBull}
            alt="Redbull Logo"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
          <img
            src={SponsorForbes}
            alt="Forbes Logo"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
          <img
            src={SponsorFortune}
            alt="Fortune Logo"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Hpage;
