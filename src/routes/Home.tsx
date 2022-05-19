import React from "react";
import { Intro } from "../containers/home/Intro";
import { Who } from "../containers/home/Who";
import { TechInterests } from "../containers/home/TechInterests";
import { Experience } from "../containers/home/Experience";
import { Testimonial } from "../containers/home/Testimonial";
import { useTitle } from "../hooks/useTitle";

export const Home: React.FC = () => {
  useTitle("Bill Wohlers");

  return (
    <>
      <Intro />
      <Who />
      <TechInterests />
      <Experience />
      <Testimonial />
    </>
  );
};
