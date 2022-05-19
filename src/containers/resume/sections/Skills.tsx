import React from "react";
import { copy } from "../../../assets/copy";

export const Skills: React.FC = () => {
  return (
    <p className="text-lg font-light">
      {Object.entries(copy.resume.skills).map(([skill, opacity], i) => (
        <span style={{ opacity }} key={skill}>
          {skill}
          {i < Object.entries(copy.resume.skills).length - 1 && (
            <span> &middot; </span>
          )}
        </span>
      ))}
    </p>
  );
};
