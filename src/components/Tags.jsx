import React from "react";
import CloseIcon from "@mui/icons-material/HighlightOff";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

export const Count = ({ count }) => {
  return (
    <Typography sx={{ color: "text.secondary", fontSize: 11 }}>
      {count}
    </Typography>
  );
};

export const Tags = ({ tags, selectedTags, onSelectTag, clearTags }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
      <Box sx={{ mb: 1, height: 32 }}>
        {selectedTags.length > 0 && (
          <Button
            size="sm"
            sx={{
              position: "relative",
              p: 0,
              color: "white",
              "&:hover": { background: "none", opacity: 0.75 },
            }}
            onClick={clearTags}
            variant="plain"
            color="info"
            startDecorator={<CloseIcon />}
          >
            Clear
          </Button>
        )}
      </Box>

      <Box sx={{ m: -0.5 }}>
        {tags.map((tag, i) => (
          <Chip
            sx={{ m: 0.5, borderRadius: 5, py: 0.75, px: 1.5 }}
            size="sm"
            onClick={() => onSelectTag(tag.key)}
            color={selectedTags.includes(tag.key) ? "info" : "neutral"}
            endDecorator={<Count count={tag.doc_count} />}
            key={`tag-filter-${i}`}
          >
            {tag.key}
          </Chip>
        ))}
      </Box>
    </Box>
  );
};
