import React, { useState } from "react";
import { NotesControl } from "../containers/notes/NotesControl";
import { NotesList } from "../containers/notes/NotesList";
import { notes } from "../assets/notes";
import { useTitle } from "../hooks/useTitle";

export const Notes: React.FC = () => {
  useTitle("Notes | Bill Wohlers");

  const [notesToDisplay, setNotesToDisplay] = useState(
    Array.from({ length: notes.length }, (_, i) => i) as number[]
  );

  return (
    <div className="content py-8">
      <p className="text-3xl font-bold mb-1">Notes</p>
      <p className="text-lg font-light mb-4">
        A collection of some of my thoughts.
      </p>
      <NotesControl onNotesToDisplayChanged={setNotesToDisplay} />
      <NotesList noteIndices={notesToDisplay} />
    </div>
  );
};
