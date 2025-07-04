import { Box, Link } from "@mui/material";
import logoSVG from "../assets/logo.svg";
import { Button } from "./Button";

interface Item {
  title: string;
  url: string;
  solid: boolean;
}

const items: Item[] = [
  { title: "Over ons", url: "www.google.nl", solid: false },
  { title: "Contact", url: "https://google.nl", solid: true },
];

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        pt: 4,
        px: { xs: 4, sm: 8, lg: 16 },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="img"
        src={logoSVG}
        alt="Logo"
        sx={{
          height: 32,
        }}
      />
      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          display: { xs: "none", md: "flex" },
        }}
      >
        {items.map(({ title, url, solid }, index) =>
          solid ? (
            <Button key={index + title} title={title} url={url} />
          ) : (
            <Link
              key={title + index}
              href={url}
              underline="none"
              sx={{ color: "text.secondary" }}
            >
              {title}
            </Link>
          ),
        )}
      </Box>
    </Box>
  );
};

export { Header };
