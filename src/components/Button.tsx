import { Button as LocalButton, Typography } from "@mui/material";

interface ButtonProps {
  title: string;
  url: string;
  variant?: "primary" | "secondary" | "white";
}

const Button: React.FC<ButtonProps> = ({ title, variant = "primary" }) => {
  const getBackground = () => {
    switch (variant) {
      case "white":
        return "white";
      case "secondary":
        return "linear-gradient(45deg, #7800A6 0%, #180068 100%)";
      case "primary":
        return "linear-gradient(45deg, #009EC9 0%, #18009A 100%)";
    }
  };

  const getHoverBackground = () => {
    switch (variant) {
      case "white":
        return "white";
      case "secondary":
        return "linear-gradient(45deg, #5c0080 0%, #120050 100%)";
      case "primary":
        return "linear-gradient(45deg, #007ba3 0%, #140078 100%)";
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "white":
        return "text.primary";
      case "secondary":
        return "text.secondary";
      case "primary":
        return "text.secondary";
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
      <Typography sx={{ textTransform: "none" }} color={getTextColor()}>
        {title}
      </Typography>
    </LocalButton>
  );
};

export { Button };
