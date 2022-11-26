import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

const theme = extendTheme({
  components: {
    JoyModalDialog: {
      defaultProps: {
        layout: "top",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.layout === "top" && {
            top: "12vh",
            left: "50%",
            transform: "translateX(-50%)",
          }),
        }),
      },
    },
  },
});

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
