import { Box } from "@mui/material";
import type { JSX } from "react";
import { Footer } from "../components";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <Box sx={{ flex: 1, minHeight: "100vh", width: "100vw" }}>
    {children}
    <Box sx={{ flex: 1, bgcolor: "red", height: "100%" }} />
    <Footer />
  </Box>
);

export { Page };
