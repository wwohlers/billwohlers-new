import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export type CheckboxProps = {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  text,
}) => {
  const onClick = () => {
    onChange(!checked);
  };

  return (
    <div
      className="flex flex-row items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="mr-2">
        {checked ? (
          <MdCheckBox size={18} />
        ) : (
          <MdCheckBoxOutlineBlank size={18} />
        )}
      </div>
      <span>{text}</span>
    </div>
  );
};
