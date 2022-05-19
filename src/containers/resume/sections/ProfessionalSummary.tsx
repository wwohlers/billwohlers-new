import React from "react";
import { copy } from "../../../assets/copy";

export const ProfessionalSummary: React.FC = () => {
  return (
    <>
      {copy.resume.professionalSummary.map((text) => (
        <p className="text-lg font-light my-4" key={text}>
          {text}
        </p>
      ))}
    </>
  );
};
