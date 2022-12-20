import React, { useState } from "react";
import { copy } from "../../../assets/copy";

export type EducationDegreeProps = {
  degree: typeof copy.resume.education.degree;
};

export const EducationDegree: React.FC<EducationDegreeProps> = ({ degree }) => {
  return (
    <>
      <div className="cursor-pointer">
        <span className="text-lg inline-block">
          {copy.resume.education.degree.name}
        </span>
        <span className="font-bold inline-block mx-2">GPA: {degree.gpa}</span>
      </div>
      <div
        className={
          "transition-dropdown duration-300 overflow-hidden max-h-huge opacity-1"
        }
      >
        {Object.entries(degree.courses).map(([name, grade]) => (
          <p className="ml-2 flex flex-row items-center space-x-2" key={name}>
            <span className="text-sm font-medium uppercase w-4 block">
              {grade}
            </span>
            <span className="text-sm font-light inline-block text-right">
              {name}
            </span>
          </p>
        ))}
      </div>
    </>
  );
};
