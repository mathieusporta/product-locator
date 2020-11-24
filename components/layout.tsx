import React from "react";
import { Header } from "./header";
import  SearchBarSection  from "./SearchBarSection";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchBarSection/>
      
      {children}
    </div>
  );
};