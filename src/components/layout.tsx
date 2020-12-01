import React from "react";
import { Header } from "./header";
import Accueil from "./accueil";
import SearchBarSection from "./SearchBarSection";
import MagasinVisu from "../components/magasin";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      
      <Accueil />
      {children}
    </div>
  );
};

