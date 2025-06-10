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
        background: "linear-gradient(45deg, #007ba3 0%, #140078 100%)",
        py: { xs: 2, md: 8 },
        px: 2,
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${bloomPNG})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
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
          {persons.map(({ name, role }) => (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                component="img"
                src={personPNG}
                sx={{
                  width: "128px",
                  height: "128px",
                  objectFit: "cover",
                  transition: "opacity 0.3s ease-in-out",
                  "&:hover": {
                    animation: "spin 1s linear infinite",
                  },
                  "@keyframes spin": {
                    "0%": {
                      transform: "rotate(0deg)",
                    },
                    "100%": {
                      transform: "rotate(360deg)",
                    },
                  },
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
        <Box>
          <Button title="Contact" url="#" variant="white" />
        </Box>
      </Box>
    </Box>
  );
};

export { TeamSection };
export type { Person };
