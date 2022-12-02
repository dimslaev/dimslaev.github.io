import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
// import IconButton from "@mui/joy/IconButton";
// import LightIcon from "@mui/icons-material/LightMode";
// import DarkIcon from "@mui/icons-material/DarkMode";

const purple = {
  50: "#FDF7FF",
  100: "#F4EAFF",
  200: "#E1CBFF",
  300: "#C69EFF",
  400: "#A374F9",
  500: "#814DDE",
  600: "#5F35AE",
  700: "#452382",
  800: "#301761",
  900: "#1D0A42",
};
const blue = {
  50: "#F4FAFF",
  100: "#DDF1FF",
  200: "#ADDBFF",
  300: "#6FB6FF",
  400: "#3990FF",
  500: "#096BDE",
  600: "#054DA7",
  700: "#02367D",
  800: "#072859",
  900: "#00153C",
};

const joyTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: purple,
        info: blue,
      },
    },
    light: {
      palette: {
        primary: purple,
        info: blue,
      },
    },
  },
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

export const AppContainer = ({ children, theme, setTheme }) => (
  <CssVarsProvider
    theme={joyTheme}
    defaultMode={theme}
    colorSchemeSelector="#container"
  >
    <CssBaseline />
    <Box
      id="container"
      sx={{
        minHeight: "100vh",
        bgcolor:
          theme === "dark"
            ? "var(--joy-palette-neutral-900)"
            : "var(--joy-palette-neutral-100)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      {/* <IconButton
        sx={{
          position: "fixed",
          left: "2.5rem",
          bottom: "1rem",
          background: "none!important",
        }}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton> */}
    </Box>
  </CssVarsProvider>
);
