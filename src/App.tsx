import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { JSX } from "react";
import { AboutUsPage } from "./pages";

const theme = createTheme({
  palette: {
    text: {
      primary: "#18009A",
      secondary: "#ffffff",
    },
    primary: {
      main: "#1976d2",
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AboutUsPage />
    </ThemeProvider>
  );
}

export default App;
