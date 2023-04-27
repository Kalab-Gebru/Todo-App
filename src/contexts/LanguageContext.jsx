import React, { createContext, useState } from "react";
import { LANGUAGE_LIST } from "../constants/constant101";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState(LANGUAGE_LIST.ENGLISH);
  const changeLanguage = (e) => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
