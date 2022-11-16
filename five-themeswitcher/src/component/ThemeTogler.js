import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeTogler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}>
      <span>{themeMode === "light" ? "Turn Off" : "Turn Onn"}</span>
    </div>
  );
};

export default ThemeTogler;
