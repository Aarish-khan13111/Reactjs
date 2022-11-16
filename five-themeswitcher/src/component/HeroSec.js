import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../color";

const HeroSec = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textcolor}`,
        textAlign: "center",
      }}>
      <h1>context Api Theme Togler</h1>
      <p>This is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}>
        Click Me
      </button>
    </div>
  );
};
export default HeroSec;
