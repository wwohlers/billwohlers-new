import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * App header.
 * @constructor
 */
export const Header: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="py-8 border-b border-gray-200">
      <div className="content flex flex-row justify-between content-center">
        <p className="text-2xl font-light cursor-pointer" onClick={goHome}>
          Bill Wohlers
        </p>
        <div className="flex flex-row">
          <MenuItem text={"Resume"} path={"/resume"} />
        </div>
      </div>
    </div>
  );
};

type MenuItemProps = {
  text: string;
  path: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-3 cursor-pointer font-medium border-b-2 border-white hover:border-red-700 transition-colors duration-300 h-max"
      onClick={() => navigate(path)}
    >
      {text}
    </div>
  );
};
