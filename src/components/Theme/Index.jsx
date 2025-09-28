import React from "react";
import { useState } from "react";
import Moon from "../../assets/Moon.png";
import Sun from "../../assets/Sun.png";

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
      <button
        onClick={toggleDarkMode}
        className="focus:outline-none focus:ring-0"
      >
        <div className="text-dark dark:text-light cursor-pointer hover:scale-110 transition-transform duration-300">
          {darkMode ? (
            <img src={Sun} className="w-16 opacity-75" />
          ) : (
            <img src={Moon} className="w-16 opacity-75" />
          )}
        </div>
      </button>
    </div>
  );
};

export default Theme;
