import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { Logo } from "./Logo";
import { useTheme } from "@mui/joy/styles";

export const Hello = ({ theme }) => {
  const joyTheme = useTheme();

  return (
    <Box>
      <Box sx={{ width: 120, mb: 2 }}>
        <Logo
          primary={
            theme === "dark"
              ? joyTheme.palette.primary["600"]
              : joyTheme.palette.primary["400"]
          }
          secondary={
            theme === "dark"
              ? joyTheme.palette.neutral["100"]
              : joyTheme.palette.neutral["800"]
          }
        />
      </Box>
      <Typography level="body2" sx={{ mb: 2 }}>
        Hi! My name is Dimitar Slaev. <br />
        Front-end developer, father, and foo!
      </Typography>

      <Typography level="body2">
        I don't enjoy writing articles, but I bookmark the best things I read.
      </Typography>
    </Box>
  );
};
