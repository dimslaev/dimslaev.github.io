import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListDivider from "@mui/joy/ListDivider";
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
            border: 0,
            py: 0,
            "--List-item-paddingLeft": "1rem",
            "--List-item-paddingRight": "7rem",
          }}
          onMouseLeave={onMouseLeave}
        >
          <ListDivider sx={{ my: 0 }} />
          {items.map((item, i) => (
            <>
              <ListItem key={`item-${i}`} onMouseEnter={onMouseEnter(i)}>
                <ListItemButton
                  href={item.url}
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "block", py: 3 }}
                >
                  <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    // justifyContent="space-between"
                  >
                    <Typography
                      level="h6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      level="body3"
                      mb={1}
                      sx={{
                        textAlign: "right",
                        color: "var(--joy-palette-primary-400)",
                      }}
                    >
                      {item.tags?.join(", ")}
                    </Typography>
                  </Stack>
                </ListItemButton>
                {actionsIndex == i && (
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ position: "absolute", right: "1rem" }}
                  >
                    <IconButton
                      size="sm"
                      variant="soft"
                      onClick={() => {
                        onEdit(item);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="sm"
                      variant="soft"
                      onClick={() => {
                        onDelete(item);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                )}
              </ListItem>
              <ListDivider sx={{ my: 0 }} />
            </>
          ))}
        </List>
        <Button
          variant="outlined"
          color="neutral"
          sx={{ border: 0 }}
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
