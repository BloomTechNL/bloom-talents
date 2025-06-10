import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { JSX } from "react";
import {
  ImageBannerSection,
  SimpleSection,
  TeamSection,
  TilesSection,
  TopSection,
  type Person,
} from "./sections";

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

const persons: Person[] = [
  { name: "Laurens", role: "CCI" },
  { name: "Laurens", role: "CCI" },
  { name: "Laurens", role: "CCI" },
];

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
        <ImageBannerSection title="“Birds of a feather flock together”" />
        <TilesSection
          content={[
            {
              message:
                "Bloom Talents is een nieuw, uniek, laagdrempelig en exclusief traineeship voor de top van technisch Nederland op hard- en softskills.",
            },
            {
              message:
                "Wij selecteren uitsluitend talenten met een Master Informatica, Wiskunde, AI of Natuurkunde van de TU Delft, TU Eindhoven en Universiteit Twente.",
            },
            {
              message:
                "Alle talenten worden gematcht aan organisaties die naadloos passen en waar zij zich voor de lange(re) termijn aan willen committeren.",
            },
            {
              message:
                "Tegelijkertijd volgen de talenten het exclusieve Bloom traineeship van een jaar met 30 masterclasses én een stuk maatwerk.",
            },
            {
              message:
                "Hierdoor zijn onze opdrachtgevers verzekerd van technisch toptalent dat zich razendsnel ontwikkelt tot een onmisbare steunpilaar.",
            },
          ]}
        />
        <TeamSection title="Meet the team" persons={persons} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
