import * as React from "react";
import Box from "@mui/joy/Box";

export const PageSidebar = ({ children }) => (
  <Box
    sx={{
      flexGrow: 1,
      flexBasis: 250,
      p: 2,
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
      p: 2,
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
      py: 8,
      px: 4,
    }}
  >
    {children}
  </Box>
);
