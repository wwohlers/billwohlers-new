import React from "react";
import { copy } from "../../../assets/copy";
import { EducationDegree } from "./EducationDegree";

export const Education: React.FC = () => {
  return (
    <>
      <p className="text-2xl font-light inline-block">
        {copy.resume.education.school}
      </p>
      <p>
        {copy.resume.education.tags.map((tag, i) => (
          <span className="text-xs uppercase font-bold text-gray-500" key={tag}>
            {tag}
            {i < copy.resume.education.tags.length - 1 && (
              <span> &middot; </span>
            )}
          </span>
        ))}
      </p>
      <EducationDegree degree={copy.resume.education.degree} />
    </>
  );
};
