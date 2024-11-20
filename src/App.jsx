import { RouterProvider } from "react-router-dom";
import router from "./routes/routes"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import DarkTheme from "./Theme/DarkTheme"
import LightTheme from "./Theme/LightTheme";



function App() {
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
      <RouterProvider router={router} basename="/dashboard" future={{ v7_startTransition: true }} />
      <div>
        <button onClick={toggleTheme}>
          Switch to {currentTheme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
