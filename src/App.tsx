import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { JSX } from "react";
import feathersPNG from "./assets/feathers.png";
import { Header } from "./components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ bgcolor: "blue", flex: 1, minHeight: "100vh", width: "100vw" }}
      >
        <Box
          sx={{
            bgcolor: "blue",
            flex: 1,
            width: "100vw",
            minHeight: "40vh",
            maxHeight: "40vh",
            backgroundImage: `url(${feathersPNG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
