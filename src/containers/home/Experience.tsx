import React from "react";
import { HomeSection } from "./HomeSection";
import { copy } from "../../assets/copy";

export const Experience: React.FC = () => {
  const renderItem = (item: typeof copy.home.experience.items[number]) => (
    <div
      className="w-full md:w-1/2 p-8 flex flex-col items-center"
      key={item.header}
    >
      <p className="text-xl font-medium">{item.header}</p>
      <div className="flex flex-row my-4">
        {item.logos.map((src, i) => (
          <img
            src={src}
            key={i}
            className="w-8 h-8 mr-2 rounded-full"
            alt="Company logo"
          />
        ))}
      </div>
      <p className="text-center text-lg font-light">{item.text}</p>
    </div>
  );

  return (
    <HomeSection>
      <p className="text-3xl font-bold mb-4">{copy.home.experience.header}</p>
      <div className="flex flex-col md:flex-row">
        {copy.home.experience.items.map(renderItem)}
      </div>
    </HomeSection>
  );
};
