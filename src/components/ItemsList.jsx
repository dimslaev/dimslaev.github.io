import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";

import ListItemContent from "@mui/joy/ListItemContent";
import ListDivider from "@mui/joy/ListDivider";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export const ItemsList = ({
  items,
  onEdit,
  onDelete,
  setAddItemDialogOpen,
}) => {
  const [actionsIndex, setActionsIndex] = React.useState(-1);
  const onMouseEnter = (index) => () => {
    setActionsIndex(index);
  };
  const onMouseLeave = () => {
    setActionsIndex(-1);
  };

  return (
    <>
      <Stack spacing={1}>
        <List
          variant="outlined"
          sx={{
            overflow: "hidden",
            bgcolor: "background.body",
            minWidth: 240,
            borderRadius: "sm",
            boxShadow: "sm",
            py: 0,
            "--List-item-paddingLeft": "1.5rem",
            "--List-item-paddingRight": "1rem",
          }}
          onMouseLeave={onMouseLeave}
        >
          {items.map((item, i) => (
            <>
              <ListItem
                key={`item-${i}`}
                onMouseEnter={onMouseEnter(i)}
                endAction={
                  actionsIndex == i && (
                    <Stack spacing={1} direction="row">
                      <IconButton
                        size="sm"
                        color="info"
                        onClick={() => {
                          onEdit(item);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="sm"
                        color="info"
                        onClick={() => {
                          onDelete(item);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  )
                }
              >
                <ListItemButton
                  href={item.url}
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "block", py: 3 }}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Typography
                      level="h6"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="text.primary"
                    >
                      {item.title}
                    </Typography>
                    <Typography level="body3" mb={1}>
                      {item.tags?.join(", ")}
                    </Typography>
                  </Stack>
                </ListItemButton>
              </ListItem>
              {i < items.length - 1 && <ListDivider sx={{ my: 0 }} />}
            </>
          ))}
        </List>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setAddItemDialogOpen(true);
          }}
        >
          <AddIcon />
        </Button>
      </Stack>
    </>
  );
};
