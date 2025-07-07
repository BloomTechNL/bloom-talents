import { Box, Typography } from "@mui/material";
import bloomSVG from "../assets/bloom.svg";
import feathersPNG from "../assets/feathers.png";
import { Header } from "../components";

interface TopSectionProps {
  showLogo?: boolean;
  title?: [string, string];
  message?: string;
}

const TopSection: React.FC<TopSectionProps> = ({
  showLogo,
  title,
  message,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        backgroundImage: `url(${feathersPNG})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
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
          maxWidth: 440,
        }}
      >
        {showLogo && (
          <Box
            component="img"
            src={bloomSVG}
            alt="Logo"
            sx={{
              height: 56,
              mb: 3,
              mt: 6,
            }}
          />
        )}
        {title && (
          <>
            <Typography variant="h4" color="text.secondary">
              {title[0]}
            </Typography>
            <Typography variant="h4" color="text.secondary" sx={{ mb: 1 }}>
              {title[1]}
            </Typography>
          </>
        )}
        {!!message && (
          <Typography sx={{ mb: 6 }} color="text.secondary">
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { TopSection };
