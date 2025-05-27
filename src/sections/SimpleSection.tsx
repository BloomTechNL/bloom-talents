import { Box, Typography } from "@mui/material";

interface SimpleSectionProps {
  title: string;
  message: string;
}

const SimpleSection: React.FC<SimpleSectionProps> = ({ title, message }) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        py: 8,
        px: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 500 }}>
        <Typography textAlign="center" sx={{ mb: 3 }}>
          {message}
        </Typography>
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export { SimpleSection };
