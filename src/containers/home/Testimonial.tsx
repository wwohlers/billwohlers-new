import React from "react";
import { HomeSection } from "./HomeSection";
import { copy } from "../../assets/copy";

export const Testimonial: React.FC = () => {
  return (
    <HomeSection extraClasses="bg-[#f2f9ff]">
      <p className="text-2xl font-light mb-4">
        "{copy.home.testimonial.quote}"
      </p>
      <div className="flex flex-col items-end w-full">
        <div className="flex flex-row items-center">
          <div className="text-right">
            <p className="text-xl font-medium">
              &mdash; {copy.home.testimonial.name}
            </p>
            <p className="text-gray-500 font-light">
              {copy.home.testimonial.title}
            </p>
          </div>
          <img
            className="w-24 h-24 rounded-full ml-4"
            src={copy.home.testimonial.portrait}
            alt={copy.home.testimonial.name}
          />
        </div>
      </div>
    </HomeSection>
  );
};
