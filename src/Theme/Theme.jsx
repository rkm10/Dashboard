import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import DarkTheme from "./DarkTheme";
import LightTheme from "./LightTheme";

function Theme({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");

  // Create Material-UI themes
  const lightMuiTheme = createTheme(LightTheme[0]);
  const darkMuiTheme = createTheme(DarkTheme[0]);

  // Toggle theme handler
  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Determine the active theme
  const activeTheme = currentTheme === "light" ? lightMuiTheme : darkMuiTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <div>
        <button onClick={toggleTheme}>
          Switch to {currentTheme === "light" ? "Dark" : "Light"} Mode
        </button>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Theme;
