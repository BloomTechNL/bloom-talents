import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    secondary: {
      main: "#808080",
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<AboutUsPage />} />
          <Route path="/contact" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
