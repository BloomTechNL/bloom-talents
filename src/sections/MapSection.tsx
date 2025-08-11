import { Box } from "@mui/material";
import { Map } from "../components";

const MapSection: React.FC = () => {
  return (
    <Box
      sx={{
        pt: 6,
        px: { xs: 2, md: 0 },
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          bgcolor: "#F3F2F9",
          maxWidth: { xs: " 100%", md: "80vw" },
          p: 2,
          flex: 1,
          borderRadius: 4,
        }}
      >
        <Map />
      </Box>
    </Box>
  );
};

export { MapSection };
