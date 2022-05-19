import React, { useEffect, useRef } from "react";

export type HomeProps = {
  extraClasses?: string;
};

export const HomeSection: React.FC<HomeProps> = ({
  children,
  extraClasses,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    if (wrapperRef.current) onScroll();
  }, [wrapperRef]);

  const onScroll = () => {
    if (!wrapperRef.current) return;
    if (
      wrapperRef.current.getBoundingClientRect().y <
      window.innerHeight - (wrapperRef.current.clientHeight / 3)
    ) {
      wrapperRef.current.classList.remove("before-load");
    }
  };

  return (
    <div
      className={
        "py-8 md:py-16 before-load transition duration-1000 " + extraClasses
      }
      ref={wrapperRef}
    >
      <div className="content">{children}</div>
    </div>
  );
};
