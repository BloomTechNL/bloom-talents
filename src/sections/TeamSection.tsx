import { Box, Typography } from "@mui/material";
import bloomPNG from "../assets/bloom-solid.png";
import personPNG from "../assets/mattijs.png";
import { Button } from "../components";

interface Person {
  name: string;
  role: string;
}

interface TilesSectionProps {
  title: string;
  persons: Person[];
}

const TeamSection: React.FC<TilesSectionProps> = ({ title, persons }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 2, md: 8 },
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Gradient background layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, #2a91b5 0%, #4a2f96 100%)",
          zIndex: 0,
        }}
      />
      {/* Image overlay layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bloomPNG})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          zIndex: 1,
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          color="text.secondary"
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {persons.map(({ name, role }, index) => (
            <Box
              key={name + index}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                component="img"
                src={personPNG}
                sx={{
                  width: "128px",
                  height: "128px",
                  objectFit: "cover",
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
              <Typography
                variant="body1"
                fontWeight="bold"
                textAlign="center"
                color="text.secondary"
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                color="text.secondary"
              >
                {role}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ pt: 4 }}>
          <Button title="Contact" url="#" variant="white" />
        </Box>
      </Box>
    </Box>
  );
};

export { TeamSection };
export type { Person };
