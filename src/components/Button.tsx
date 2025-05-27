import { Button as LocalButton, Typography } from "@mui/material";

interface ButtonProps {
  title: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <LocalButton
      sx={{
        background: "linear-gradient(45deg, #009EC9 0%, #18009A 100%)",
        borderRadius: 25,
        py: 1,
        px: 1.5,
        "&:hover": {
          background: "linear-gradient(45deg, #007ba3 0%, #140078 100%)",
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
