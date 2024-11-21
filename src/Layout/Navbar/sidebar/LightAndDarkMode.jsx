import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/ThemeSlice";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function LightAndDarkMode() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme); // Get current theme from Redux

  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Dispatch the toggleTheme action
  };

  return (
    <div>
      <div onClick={handleThemeToggle} style={{ cursor: "pointer" ,background:"none", border:"none", display:"flex", padding:"0"}}>
        {currentTheme === "light" ? <DarkModeIcon sx={{ color: "white" }}/> : <LightModeIcon  />} 
      </div>
    </div>
  );
}

export default LightAndDarkMode;
