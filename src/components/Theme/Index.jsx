import { Moon, Sun } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevTheme) => {
      const theme = !prevTheme;
      localStorage.setItem("darkMode", theme);
      if (theme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return theme;
    });
  };

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        <div className="text-dark dark:text-light">
          {darkMode ? (
            <Sun size={32} weight="fill" />
          ) : (
            <Moon size={32} weight="fill" />
          )}
        </div>
      </button>
    </div>
  );
};

export default Theme;
