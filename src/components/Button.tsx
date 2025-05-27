import { Button as LocalButton, Typography } from "@mui/material";

interface ButtonProps {
  title: string;
  url: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ title, variant = "primary" }) => {
  const getBackground = () => {
    switch (variant) {
      case "secondary":
        return "linear-gradient(45deg, #7800A6 0%, #180068 100%)";
      default:
        return "linear-gradient(45deg, #009EC9 0%, #18009A 100%)";
    }
  };

  const getHoverBackground = () => {
    switch (variant) {
      case "secondary":
        return "linear-gradient(45deg, #5c0080 0%, #120050 100%)";
      default:
        return "linear-gradient(45deg, #007ba3 0%, #140078 100%)";
    }
  };

  return (
    <LocalButton
      sx={{
        background: getBackground(),
        borderRadius: 25,
        py: 1,
        px: 1.5,
        "&:hover": {
          background: getHoverBackground(),
        },
      }}
    >
      <Typography sx={{ textTransform: "none" }} color="white">
        {title}
      </Typography>
    </LocalButton>
  );
};

export { Button };
