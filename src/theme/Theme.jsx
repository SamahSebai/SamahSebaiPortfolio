// #1976D2 blue
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkMode = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1540,
    },
  },
  palette: {
    primary: {
      main: "#64ffda",
      contrastText: "#ffffff",
    },
    background: {
      lighter: "#233554",
      light: "#112240", // for cards background
      main: "#0a192f", // for main page
      dark: "#020D1A", // for loading page
      contrastText: "#ffffff",
    },
    text: {
      lighter: "#e6f1ff",
      light: "#ccd6f6", // for titles
      main: "#a8b2d1", // for paragprahs in cards & left-right
      dark: "#8892b0", // for paragraphs
    },
  },
});

const Theme = (props) => {
  const { /*theme,*/ children } = props;

  return <ThemeProvider theme={darkMode}>{children}</ThemeProvider>;
};

export default Theme;
