import { Box, Typography } from "@mui/material";
import bloomSVG from "../assets/bloom.svg";
import feathersPNG from "../assets/feathers.png";
import { Button, Header } from "../components";

const TopSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "blue",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "40vh",
        backgroundImage: `url(${feathersPNG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          py: 12,
          maxWidth: 440,
        }}
      >
        <Box
          component="img"
          src={bloomSVG}
          alt="Logo"
          sx={{
            height: 56,
            mb: 4,
          }}
        />
        <Typography variant="h4" color="text.secondary">
          Exclusief, karaktervol
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{ mb: 1 }}>
          Tech-Traineeship
        </Typography>
        <Typography sx={{ mb: 6 }} color="text.secondary">
          Software - Data - Cloud - loT
        </Typography>
        <Button title="Start" url="adssa" variant="secondary" />
      </Box>
    </Box>
  );
};

export { TopSection };
