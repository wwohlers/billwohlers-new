import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Resume } from "./routes/Resume";
import { Notes } from "./routes/Notes";

export const RouterView: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};
