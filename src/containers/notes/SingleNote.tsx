import React, { useEffect, useRef } from "react";
import { Note } from "../../assets/notes";

export type SingleNoteProps = {
  note: Note;
  noteNumber: number;
};

export const SingleNote: React.FC<SingleNoteProps> = ({ note, noteNumber }) => {
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (noteRef.current) {
      noteRef.current.classList.remove("opacity-0");
      noteRef.current.classList.add("opacity-1");
    }
  }, [noteRef]);

  return (
    <div className="my-8 opacity-0 transition duration-300" ref={noteRef}>
      <p className="mb-1">
        <span className="font-light text-gray-500 inline-block mr-2">
          #{noteNumber}
        </span>
        <span className="text-xl font-bold mb-2">{note.title}</span>
      </p>
      <NotesCategories categories={note.categories} />
      <div className="mt-2 font-light spaced-children">{note.content}</div>
    </div>
  );
};

type NotesCategoriesProps = {
  categories: string[];
};

const NotesCategories: React.FC<NotesCategoriesProps> = ({ categories }) => {
  return (
    <div>
      {categories.map((cat) => (
        <span
          key={cat}
          className="inline-block py-1 px-2 bg-gray-200 rounded-sm mr-2 text-xs uppercase font-bold"
        >
          {cat}
        </span>
      ))}
    </div>
  );
};
