import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import Link from "@mui/joy/Link";

export const ItemsList = ({ items }) => (
  <List>
    {items.map((item, i) => (
      <ListItem key={`item-${i}`} sx={{ mb: 2 }}>
        <ListItemContent>
          <Link
            href={item.url}
            variant="body2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </Link>
        </ListItemContent>
      </ListItem>
    ))}
  </List>
);
