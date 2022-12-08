import * as React from "react";
import Box from "@mui/joy/Box";

export const PageSidebar = ({ children }) => (
  <Box
    sx={{
      flexGrow: 1,
      flexBasis: { xs: "100%", md: 250 },

      py: { xs: 2, md: 2 },
      px: { xs: 0, md: 2 },
    }}
  >
    {children}
  </Box>
);

export const PageContent = ({ children }) => (
  <Box
    sx={{
      flexGrow: 99999,
      flexBasis: 0,
      flexBasis: { xs: "100%", md: 0 },
      py: { xs: 2, md: 2 },
      px: { xs: 0, md: 2 },
    }}
  >
    {children}
  </Box>
);

export const PageContainer = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      height: "100%",
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 4 },
    }}
  >
    {children}
  </Box>
);
