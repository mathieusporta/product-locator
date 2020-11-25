import React from "react";
import { Header } from "./header";
import  Accueil  from "./accueil";
import SearchBarSection from "./SearchBarSection";

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