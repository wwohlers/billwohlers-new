import React, { useCallback, useEffect, useRef, useState } from "react";
import { notes } from "../../assets/notes";
import { SingleNote } from "./SingleNote";

export type NotesListProps = {
  noteIndices: number[];
};

export const NotesList: React.FC<NotesListProps> = ({ noteIndices }) => {
  const [notesToShow, setNotesToShow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateNotesToShow = useCallback(() => {
    if (notesToShow === noteIndices.length) return;
    if (containerRef.current) {
      const divBottom = containerRef.current.getBoundingClientRect().bottom;
      if (divBottom < window.innerHeight - 100) {
        setNotesToShow(notesToShow + 1);
      }
    }
  }, [notesToShow, noteIndices]);

  useEffect(() => {
    window.addEventListener("scroll", updateNotesToShow);
    return () => window.removeEventListener("scroll", updateNotesToShow);
  }, [updateNotesToShow]);

  useEffect(() => {
    // Recursively call update when notesToShow is changed, in case the page is
    // not yet scrollable.
    updateNotesToShow();
  }, [notesToShow, updateNotesToShow, containerRef]);

  const mappedNotesToShow = () => {
    return noteIndices.slice(0, notesToShow).map((i) => notes[i]);
  };

  return (
    <div ref={containerRef}>
      {mappedNotesToShow().map((note, i) => (
        <SingleNote note={note} key={i} noteNumber={noteIndices[i] + 1} />
      ))}
    </div>
  );
};
