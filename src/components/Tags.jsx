import React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

export const Count = ({ count }) => {
  return (
    <Typography sx={{ color: "text.secondary", fontSize: 11 }}>
      {count}
    </Typography>
  );
};

export const Tags = ({ tags, selectedTag, setSelectedTag }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 3,
      }}
    >
      <Box sx={{ m: -0.5 }}>
        {tags.map((tag, i) => {
          return (
            <Chip
              key={`tag-filter-${i}`}
              sx={{ m: 0.5, borderRadius: 5, py: 0.75, px: 1.5 }}
              size="sm"
              onClick={() => setSelectedTag(tag.key)}
              color={tag.key === selectedTag ? "info" : "neutral"}
              variant={tag.key === selectedTag ? "solid" : "outlined"}
              endDecorator={<Count count={tag.doc_count} />}
            >
              {tag.key}
            </Chip>
          );
        })}
      </Box>
    </Box>
  );
};
