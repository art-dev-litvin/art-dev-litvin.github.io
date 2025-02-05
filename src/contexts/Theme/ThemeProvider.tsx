import React from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (currentTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // No theme saved in localStorage, use system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (systemPrefersDark) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
