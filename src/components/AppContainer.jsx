import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

const theme = extendTheme({});

export const AppContainer = ({ children }) => (
  <CssVarsProvider
    theme={theme}
    defaultMode="dark"
    colorSchemeSelector="#container"
  >
    <CssBaseline />
    <Box
      id="container"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.body",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  </CssVarsProvider>
);
