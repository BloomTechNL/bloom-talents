import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { JSX } from "react";
import { SimpleSection, TopSection } from "./sections";

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
      <Box
        sx={{ bgcolor: "blue", flex: 1, minHeight: "100vh", width: "100vw" }}
      >
        <TopSection />
        <SimpleSection
          title="Samen gaan we voor groei, succes en impact."
          message="Wij verbinden de top 5% technisch toptalent met vooraanstaande organisaties. Ons exclusieve traineeship ontwikkelt talenten tot onmisbare steunpilaren die het verschil maken."
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
