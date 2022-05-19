import React, { useEffect, useRef, useState } from "react";
import { ResumeSection } from "../containers/resume/ResumeSection";
import { Education } from "../containers/resume/sections/Education";
import {
  MdAutoAwesomeMosaic,
  MdFactCheck,
  MdIntegrationInstructions,
  MdSchool,
  MdWork,
} from "react-icons/md";
import { ProfessionalSummary } from "../containers/resume/sections/ProfessionalSummary";
import { Skills } from "../containers/resume/sections/Skills";
import { ResumeExperienceItems } from "../containers/resume/sections/ResumeExperienceItems";
import { copy } from "../assets/copy";
import { useTitle } from "../hooks/useTitle";

type IResumeSection = {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
};

const sections: IResumeSection[] = [
  {
    title: "Summary",
    content: <ProfessionalSummary />,
    icon: <MdFactCheck />,
  },
  {
    title: "Education",
    content: <Education />,
    icon: <MdSchool />,
  },
  {
    title: "Skills",
    content: <Skills />,
    icon: <MdIntegrationInstructions />,
  },
  {
    title: "Experience",
    content: <ResumeExperienceItems items={copy.resume.experience} />,
    icon: <MdWork />,
  },
  {
    title: "Projects",
    content: <ResumeExperienceItems items={copy.resume.projects} />,
    icon: <MdAutoAwesomeMosaic />,
  },
];

export const Resume: React.FC = () => {
  useTitle("Resume | Bill Wohlers");

  const contentRef = useRef<HTMLDivElement>(null);
  const [sectionPositions, setSectionPositions] = useState(
    sections.map(() => 0)
  );

  useEffect(() => {
    if (contentRef.current) {
      const heightToFillScreen =
        window.innerHeight - contentRef.current.offsetTop;
      contentRef.current.style.height = `${heightToFillScreen}px`;
    }
  }, [contentRef]);

  const updatePosition = (index: number) => (newValue: number) => {
    if (sectionPositions[index] !== newValue) {
      const copy = Array.from(sectionPositions);
      copy[index] = newValue;
      setSectionPositions(copy);
    }
  };

  const scrollTo = (position: number) => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  const renderNavLink = (section: IResumeSection, i: number) => (
    <div
      className="flex flex-row items-center font-light cursor-pointer mb-2"
      onClick={() => scrollTo(sectionPositions[i])}
      key={i}
    >
      {section.icon}
      <div className="w-2" />
      {section.title}
    </div>
  );

  const renderSection = (section: IResumeSection, i: number) => (
    <ResumeSection
      key={i}
      title={section.title}
      onScrollPosition={updatePosition(i)}
    >
      {section.content}
    </ResumeSection>
  );

  return (
    <div className="content flex flex-row">
      <div className="hidden md:block md:w-max md:max-w-xs pr-8 pt-8 border-r border-gray-200">
        {sections.map(renderNavLink)}
      </div>
      <div className="flex-1 relative overflow-scroll" ref={contentRef}>
        {sections.map(renderSection)}
      </div>
    </div>
  );
};
