import React, { ChangeEvent } from "react";

export type NotesSearchProps = {
  value: string;
  onQueryUpdated: (query: string) => void;
  onEnterPressed: () => void;
};

export const NotesSearch: React.FC<NotesSearchProps> = ({
  value,
  onQueryUpdated,
  onEnterPressed,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryUpdated(event.target.value);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnterPressed();
    }
  };

  return (
    <input
      className="flex-1 h-10 outline-none font-light text-gray-600"
      value={value}
      onChange={onChange}
      onKeyPress={onEnter}
      placeholder={"Search notes or enter a number"}
    />
  );
};
