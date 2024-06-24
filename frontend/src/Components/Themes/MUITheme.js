import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    background: {
      main: "#fff",
      black: "#000",
    },
    text: {
      main: "#000",
      secondary: "#374151",
      inActive: "#8c8c8c",
      red: "#FF4141",
    },
    border: {
      main: "#000",
      contrast: "#FF4141",
    },
  },
});

export default theme;
