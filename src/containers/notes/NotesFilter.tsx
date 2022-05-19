import React, { useState } from "react";
import { allCategories, NoteCategory } from "../../assets/notes";
import { Checkbox } from "../../components/Checkbox";

export type NotesFilterProps = {
  visible: boolean;
  onFilterUpdated: (categories: NoteCategory[]) => void;
};

export const NotesFilter: React.FC<NotesFilterProps> = ({
  visible,
  onFilterUpdated,
}) => {
  const [categories, setCategories] = useState(allCategories);

  const onBoxChanged = (category: NoteCategory) => (checked: boolean) => {
    let newCategories: NoteCategory[] = [];
    if (checked) {
      if (!categories.includes(category))
        newCategories = [...categories, category];
    } else {
      newCategories = categories.filter((c) => c !== category);
    }
    setCategories(newCategories);
    onFilterUpdated(newCategories);
  };

  const classes =
    "absolute right-0 top-11 bg-white border border-gray-300 p-4 rounded-sm shadow transition duration-100 z-50";
  return (
    <div className={classes + (visible ? " opacity-1" : " opacity-0")}>
      <div>
        {allCategories.map((cat) => (
          <div
            key={cat}
            className="text-sm uppercase font-medium text-gray-500 my-1"
          >
            <Checkbox
              text={cat}
              checked={categories.includes(cat)}
              onChange={onBoxChanged(cat)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
