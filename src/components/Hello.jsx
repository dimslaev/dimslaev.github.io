import React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";

import { Logo } from "./Logo";
import { useTheme } from "@mui/joy/styles";

export const Hello = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ width: 120, mb: 2 }}>
        <Logo
          primary={theme.palette.info["500"]}
          secondary={theme.palette.text.primary}
        />
      </Box>
      <Typography level="body2" sx={{ mb: 2 }}>
        Hi! My name is Dimitar Slaev. <br />
        Front-end developer, father, and foo!
      </Typography>
    </Box>
  );
};
