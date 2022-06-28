import React from "react";
import { HomeSection } from "./HomeSection";
import { copy } from "../../assets/copy";

export const TechInterests: React.FC = () => {
  const tile = (item: typeof copy.home.techInterests.items[number]) => {
    return (
      <div className="p-2 w-full md:w-1/3" key={item.name}>
        <div className="p-6 bg-gray-100 rounded flex flex-col items-center text-center h-full hover:enlarge transition duration-300">
          <img className="w-12 rounded mb-2" src={item.logo} alt={item.name} />
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-gray-500 text-sm">{item.tagline}</p>
          <p className="font-light mt-2">
            <span>{copy.home.techInterests.useCaseText}: </span>
            {item.useCases}
          </p>
        </div>
      </div>
    );
  };

  return (
    <HomeSection extraClasses="bg-white">
      <p className="text-3xl font-bold mb-4">
        {copy.home.techInterests.header}
      </p>
      <div className="flex flex-row flex-wrap items-stretch">
        {copy.home.techInterests.items.map(tile)}
      </div>
    </HomeSection>
  );
};
