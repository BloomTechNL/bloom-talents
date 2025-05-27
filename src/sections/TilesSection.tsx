import { Box, Grid, Typography } from "@mui/material";
import { Button } from "../components";

interface Content {
  message: string;
}

interface TilesSectionProps {
  content: [Content, Content, Content, Content, Content];
}

const TilesSection: React.FC<TilesSectionProps> = ({ content }) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        py: { xs: 2, md: 8 },
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          maxWidth: {
            md: "calc(500px + 24px)",
            lg: "calc(750px + 48px)",
          },
        }}
      >
        {content.map(({ message }) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box
              sx={{
                bgcolor: "#F3F2F9",
                width: { xs: "100%", md: "250px" },
                height: "100%",
                p: 3,
                borderRadius: 4,
              }}
            >
              <Typography textAlign="center" sx={{ mb: 3 }}>
                {message}
              </Typography>
            </Box>
          </Grid>
        ))}
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Box
            sx={{
              bgcolor: "#F3F2F9",
              width: { xs: "100%", md: "250px" },
              height: "100%",
              p: 3,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              title="Ontdek meer"
              url="www.google.nl"
              variant="secondary"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { TilesSection };
