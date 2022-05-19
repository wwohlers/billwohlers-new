import React from "react";
import { HomeSection } from "./HomeSection";
import { assets } from "../../assets";
import { copy } from "../../assets/copy";

export const Intro: React.FC = () => {
  return (
    <HomeSection extraClasses="bg-white">
      <div className="flex flex-col justify-evenly md:flex-row">
        <img
          className="w-60 rounded-full mb-12 md:mr-12 md:mb-0"
          src={assets.me}
          alt="Me"
        />
        <div className="h-max self-center">
          <p className="text-4xl font-bold mb-2">{copy.home.intro.header}</p>
          <p className="text-2xl font-light">{copy.home.intro.subtitle}</p>
          <div className="flex flex-row mt-4">
            <a
              className="button"
              href="mailto:wohlers.w@northeastern.edu"
              target="_blank"
              rel="noreferrer"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};
