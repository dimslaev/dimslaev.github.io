import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";

export const BookmarksSheet = ({ children }) => {
  return (
    <Sheet
      sx={{
        // p: 2,
        position: "sticky",
        top: 0,
        borderRadius: 4,
        // bgcolor: "background.sheet",
        background: "none",
      }}
    >
      <Stack spacing={2}>{children}</Stack>
    </Sheet>
  );
};
