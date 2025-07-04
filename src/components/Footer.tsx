import { Box, Grid, Link, Typography } from "@mui/material";

interface Item {
  title: string;
  subItems: {
    title: string;
    url?: string;
  }[];
}

const items: Item[] = [
  {
    title: "Pagina's",
    subItems: [
      {
        title: "Over ons",
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
        pt: 6,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "left", md: "center" },
        bgcolor: "white",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          width: "80vw",
          bgcolor: "white",
        }}
      >
        {items.map(({ title, subItems }, index) => (
          <Grid
            key={title + index}
            size={{ xs: 12, sm: 6, lg: 4 }}
            sx={{
              justifyContent: {
                xs: "left",
                md: "center",
              },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="left"
              sx={{ pb: 2 }}
            >
              {title}
            </Typography>
            {subItems.map(({ title, url }, index) => (
              <Box
                key={title + index}
                sx={{ display: "flex", flexDirection: "column", pb: 0.5 }}
              >
                {url ? (
                  <Link
                    key={title + index}
                    href={url}
                    underline="none"
                    sx={{ color: "text.primary" }}
                  >
                    <Typography variant="body1" textAlign="left">
                      {title}
                    </Typography>
                  </Link>
                ) : (
                  <Typography variant="body1" textAlign="left">
                    {title}
                  </Typography>
                )}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          width: "80vw",
        }}
      >
        <Typography
          variant="body1"
          textAlign="left"
          sx={{ pt: 4, pb: 2, color: "secondary.main" }}
        >
          Copyright 2025 Bloom Group - All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export { Footer };
