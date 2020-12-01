import React from "react";
import { Header } from "./header";
import Accueil from "./accueil";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      
      <Accueil />
      {children}
    </div>
  );
};

