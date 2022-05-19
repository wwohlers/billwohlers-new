import React from "react";
import { copy } from "../../../assets/copy";

export type ExperienceItemProps = {
  items: typeof copy.resume.experience;
};

export const ResumeExperienceItems: React.FC<ExperienceItemProps> = ({
  items,
}) => {
  return (
    <div className="flex flex-col items-stretch">
      {items.map((item, i) => (
        <div className="flex flex-row my-2" key={i}>
          <a
            className="block w-16 border-0"
            href={item.logoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-12 h-12 rounded-full"
              src={item.logo}
              alt={item.title}
            />
          </a>
          <div className="flex-1">
            <p>
              <span className="text-lg font-light">{item.title}</span>
              <span className="inline-block w-2" />
              <span className="font-light text-gray-500 text-sm">
                {item.dates}
              </span>
            </p>
            <p className="text-xs font-bold uppercase text-gray-500 my-2">
              {item.tags.map((tag, i) => (
                <span key={tag}>
                  {tag}
                  {i < item.tags.length - 1 && <span> &bull; </span>}
                </span>
              ))}
            </p>
            <div className="font-light text-sm">
              {item.responsibilities.map((r) => (
                <div className="flex flex-row" key={r}>
                  <span className="inline-block w-4">&bull;</span>
                  <p>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
