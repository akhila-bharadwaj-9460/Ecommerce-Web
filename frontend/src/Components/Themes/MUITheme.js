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
    },
    text: {
      main: "#000",
    },
    border: {
      main: "#000",
      contrast: "#FF4141",
    },
  },
});

export default theme;
