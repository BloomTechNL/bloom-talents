import { Box, Grid, Typography } from "@mui/material";
import { Button } from "../components";

import {
  inshuranceSVG,
  piecesSVG,
  selectionSVG,
  timelineSVG,
  traineeshipSVG,
  type SVGName,
} from "../assets/icons";

interface Content {
  message: string;
  iconName: SVGName;
}

interface TilesSectionProps {
  content: [Content, Content, Content, Content, Content];
}

function getSVG(name: SVGName) {
  switch (name) {
    case "inshurance":
      return inshuranceSVG;
    case "selection":
      return selectionSVG;
    case "pieces":
      return piecesSVG;
    case "timeline":
      return timelineSVG;
    case "traineeship":
      return traineeshipSVG;
  }
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
        {content.map(({ message, iconName }) => (
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
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingBottom: 2,
                }}
              >
                <Box
                  component="img"
                  src={getSVG(iconName)}
                  sx={{
                    height: "64px",
                  }}
                />
              </Box>

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
