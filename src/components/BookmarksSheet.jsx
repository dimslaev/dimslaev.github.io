import React from "react";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export const BookmarksSheet = ({ children }) => {
  return (
    <Sheet
      sx={{
        p: 2,
        position: "sticky",
        top: 0,
        borderRadius: 4,
      }}
    >
      <Typography level="h5" sx={{ mb: 2 }}>
        Resources
      </Typography>
      {children}
    </Sheet>
  );
};
