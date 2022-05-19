import React from "react";
import { copy } from "../assets/copy";

export const FindMeOn: React.FC = () => {
  const renderItem = (item: typeof copy.findMeOn.items[number]) => (
    <a className="mr-2 last:mr-0 border-0" href={item.url} key={item.text}>
      <img
        className="w-8 h-8 rounded-full opacity-50 hover:scale-110 transition duration-300"
        src={item.logo}
        alt={item.text}
      />
    </a>
  );

  return (
    <div className="border-t border-gray-200 py-16">
      <div className="content flex flex-col items-center">
        <p className="text-xl font-medium mb-2 text-gray-500">
          {copy.findMeOn.text}
        </p>
        <div className="flex flex-row items-center">
          {copy.findMeOn.items.map(renderItem)}
        </div>
        <p className="mt-16 text-xs font-light text-gray-500">
          {copy.findMeOn.subtext}
        </p>
      </div>
    </div>
  );
};
