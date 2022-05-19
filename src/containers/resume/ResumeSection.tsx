import React, { useEffect, useRef } from "react";

export type ResumeSectionProps = {
  title: string;
  onScrollPosition: (pos: number) => void;
};

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  title,
  onScrollPosition,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      onScrollPosition(ref.current.offsetTop);
    }
  }, [ref, onScrollPosition]);

  return (
    <div className="pt-8 md:pb-2 md:px-8" ref={ref}>
      <p className="text-3xl font-bold mb-4">{title}</p>
      {children}
    </div>
  );
};
