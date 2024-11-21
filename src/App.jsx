import { useSelector } from "react-redux";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import LightTheme from "./Theme/LightTheme";
import DarkTheme from "./Theme/DarkTheme";

function App() {
  const currentTheme = useSelector((state) => state.theme.theme); // Get current theme from Redux

  // Create Material-UI themes
  const lightMuiTheme = createTheme(LightTheme[0]);
  const darkMuiTheme = createTheme(DarkTheme[0]);

  // Determine the active theme
  const activeTheme = currentTheme === "light" ? lightMuiTheme : darkMuiTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <RouterProvider router={router} basename="/dashboard" future={{ v7_startTransition: true }} />
    </ThemeProvider>
  );
}

export default App;
