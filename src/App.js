import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import Home from "./Home";

const useStyles = makeStyles({});

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? "#232323" : "#FFF",
        paper: darkMode ? "#232323" : "#FFF",
        // dark: darkMode ? '#181818' : '#f4f6f8',
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
