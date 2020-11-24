import React from "react";
import { Header } from "./header";
import  SearchBarSection  from "./SearchBarSection";
import  Accueil  from "./accueil";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchBarSection/>
      <Accueil />
      {children}
    </div>
  );
};