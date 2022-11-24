import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export const ItemsList = ({ items }) => (
  <List sx={{ mt: -1.5 }}>
    {items.map((item, i) => (
      <ListItem key={`item-${i}`} sx={{ mb: 4 }}>
        <ListItemContent>
          <Link
            href={item.url}
            level="h5"
            target="_blank"
            rel="noopener noreferrer"
            color="text.primary"
          >
            {item.title}
          </Link>

          <Typography level="body3" mb={1}>
            {item.tags.join(", ")}
          </Typography>

          {item.description && (
            <Typography level="body1">{item.description}</Typography>
          )}
        </ListItemContent>
      </ListItem>
    ))}
  </List>
);
