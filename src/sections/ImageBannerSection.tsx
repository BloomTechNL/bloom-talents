import { Box, Typography } from "@mui/material";
import bannerPNG from "../assets/banner.png";

interface ImageBannerSectionProps {
  title: string;
}

const ImageBannerSection: React.FC<ImageBannerSectionProps> = ({ title }) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        py: 12,
        px: 4,
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${bannerPNG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="text.secondary"
      >
        {title}
      </Typography>
    </Box>
  );
};

export { ImageBannerSection };
