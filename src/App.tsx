import React from "react";
import {RouterView} from "./routerView";
import {Header} from "./containers/Header";
import {FindMeOn} from "./containers/FindMeOn";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-700 bg-gray-50">
      <Header />
      <RouterView />
      <FindMeOn />
    </div>
  )
}