import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme/Theme";
import ScrollToTop from "./Layout/scrollToTop/ScrollToTop";


function App() {

  // const Theme = Theme();

  return (
      <>
        <RouterProvider router={router} basename="/dashboard" future={{ v7_startTransition: true }} />
      </>
  );
}

export default App;
