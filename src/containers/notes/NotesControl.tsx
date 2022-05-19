import React, { useCallback, useState } from "react";
import { MdFilterList, MdSearch } from "react-icons/md";
import Fuse from "fuse.js";
import { allCategories, NoteCategory, notes } from "../../assets/notes";
import { NotesSearch } from "./NotesSearch";
import { NotesFilter } from "./NotesFilter";

export type NotesControlProps = {
  onNotesToDisplayChanged: (newIndices: number[]) => void;
};

const findRelevantNotes = (
  query: string,
  categories: NoteCategory[]
): number[] => {
  if (!query) return Array.from({ length: notes.length }, (_, i) => i);
  if (!isNaN(Number(query))) {
    const num = Number(query);
    if (num > 0 && num <= notes.length) return [num - 1];
  }
  const fuse = new Fuse(notes, {
    keys: ["title", "category"],
  });
  const result = fuse.search(query);
  return result.map((r) => r.refIndex);
};

export const NotesControl: React.FC<NotesControlProps> = ({
  onNotesToDisplayChanged,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [showFilter, setShowFilter] = useState(false);

  const updateNotesToDisplay = useCallback(() => {
    const indices = findRelevantNotes(searchQuery, categories).filter((i) =>
      notes[i].categories.some((c) => categories.includes(c))
    );
    onNotesToDisplayChanged(indices);
  }, [categories, searchQuery, onNotesToDisplayChanged]);

  const onFilterUpdated = useCallback(
    (categories: NoteCategory[]) => {
      setCategories(categories);
      updateNotesToDisplay();
    },
    [updateNotesToDisplay]
  );

  const iconClasses =
    "w-10 h-10 flex justify-center items-center cursor-pointer";
  return (
    <div className="flex flex-row w-full items-center border border-gray-300 rounded-sm bg-white relative">
      <div className={iconClasses}>
        <MdSearch size={22} opacity={0.5} />
      </div>
      <NotesSearch
        value={searchQuery}
        onQueryUpdated={setSearchQuery}
        onEnterPressed={updateNotesToDisplay}
      />
      <div className={iconClasses} onClick={() => setShowFilter(!showFilter)}>
        <MdFilterList size={22} opacity={0.5} />
      </div>
      <NotesFilter visible={showFilter} onFilterUpdated={onFilterUpdated} />
    </div>
  );
};
