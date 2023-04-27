import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, toggleTheme] = useToggleState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
