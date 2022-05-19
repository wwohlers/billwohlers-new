import React from "react";
import { HomeSection } from "./HomeSection";
import { copy } from "../../assets/copy";

export const Who: React.FC = () => {
  const renderItem = (key: string, value: string) => {
    return (
      <p
        className="flex flex-col md:flex-row md:items-end md:ml-4 mt-4"
        key={key}
      >
        <span className="text-gray-500 font-light mb-1 md:mb-1 md:mr-2 h-max">
          {key}
        </span>
        <span className="font-medium text-lg border-b border-gray-300">
          {value}
        </span>
      </p>
    );
  };

  return (
    <HomeSection>
      <p className="text-3xl font-bold">{copy.home.who.header}</p>
      <div className="py-2">
        {Object.entries(copy.home.who.items).map(([key, value]) =>
          renderItem(key, value)
        )}
      </div>
    </HomeSection>
  );
};
