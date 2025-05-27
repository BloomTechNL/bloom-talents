import { Box, Button, Container, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App(): JSX.Element {
  const handleClick = (): void => {
    console.log("Button clicked!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            My Static Site
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Built with React, TypeScript, Material-UI, and Vite
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            sx={{ mt: 2 }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
