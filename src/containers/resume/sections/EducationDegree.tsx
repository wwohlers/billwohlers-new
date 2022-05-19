import React, { useState } from "react";
import { copy } from "../../../assets/copy";
import { AiOutlineDown } from "react-icons/ai";

export type EducationDegreeProps = {
  degree: typeof copy.resume.education.degree;
};

export const EducationDegree: React.FC<EducationDegreeProps> = ({ degree }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="text-gray-500 text-lg font-light inline-block my-1">
          {copy.resume.education.degree.name}
        </span>
        <span className="font-bold inline-block mx-2">{degree.gpa}</span>
        <AiOutlineDown
          className={"transition duration-300" + (!isActive && " upside-down")}
        />
      </div>
      <div
        className={
          "transition-dropdown duration-300 overflow-hidden " +
          (isActive ? "max-h-huge opacity-1" : "max-h-0 opacity-0")
        }
      >
        {Object.entries(degree.courses).map(([name, grade]) => (
          <p className="ml-4" key={name}>
            <span className="text-sm font-light inline-block text-right mr-1.5">
              {name}
            </span>
            <span className="text-sm font-bold uppercase ">{grade}</span>
          </p>
        ))}
      </div>
    </>
  );
};
