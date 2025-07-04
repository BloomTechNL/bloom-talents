import { Box, Grid, Link, Typography } from "@mui/material";

interface Item {
  title: string;
  subItems: SubItem[];
}

interface SubItem {
  title: string;
  url?: string;
}

const items: Item[] = [
  {
    title: "Pagina's",
    subItems: [
      {
        title: "Dashboard",
        url: "www.google.nl",
      },
      {
        title: "Contact",
      },
    ],
  },
  {
    title: "Neem contact op",
    subItems: [
      { title: "Symphony Towers," },
      { title: "Gustav Mahlerplein 29-35," },
      { title: "1082 MS, Amsterdam" },
    ],
  },
  {
    title: "Links",
    subItems: [
      { title: "Privacyverklaring" },
      { title: "Cookiebeleid" },
      { title: "Algemene voorwaarden" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        pt: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "left", md: "center" },
        bgcolor: "white",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        {items.map(({ title, subItems }, index) => (
          <Grid
            key={title + index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              justifyContent: {
                xs: "left",
                md: "center",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" textAlign="center">
              {title}
            </Typography>
            {subItems.map(({ title, url }) => (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {url ? (
                  <Link
                    key={title + index}
                    href={url}
                    underline="none"
                    sx={{ color: "text.primary" }}
                  >
                    <Typography variant="body1" textAlign="center">
                      {title}
                    </Typography>
                  </Link>
                ) : (
                  <Typography variant="body1" textAlign="center">
                    {title}
                  </Typography>
                )}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" textAlign="center" sx={{ pt: 2, pb: 1 }}>
        Copyright 2025 Bloom Group - All Rights Reserved
      </Typography>
    </Box>
  );
};

export { Footer };
