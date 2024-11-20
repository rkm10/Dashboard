import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions; // Export actions
export default ThemeSlice.reducer; // Export the reducer
