import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListDivider from "@mui/joy/ListDivider";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";

export const ItemsList = ({
  items,
  loading,
  onEdit,
  onDelete,
  onLike,
  setAddItemDialogOpen,
  isAdmin,
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
          {loading ? (
            <LinearProgress thickness={2} />
          ) : (
            items.map((item, i) => (
              <React.Fragment key={`item-${i}`}>
                <ListItem onMouseEnter={onMouseEnter(i)}>
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
                      flexWrap="wrap"
                    >
                      <Typography
                        level="h5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        level="body3"
                        mb={1}
                        sx={{
                          color: "var(--joy-palette-primary-400)",
                        }}
                      >
                        {formatTags(item.tags)}
                      </Typography>
                      <Typography level="body3">
                        {formatLikes(item.likes)}
                      </Typography>
                    </Stack>
                  </ListItemButton>
                  {actionsIndex == i && (
                    <Stack
                      spacing={1}
                      direction="row"
                      sx={{ position: "absolute", right: "1rem" }}
                    >
                      {isAdmin && (
                        <>
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
                        </>
                      )}

                      <IconButton
                        size="sm"
                        variant="soft"
                        onClick={() => {
                          onLike(item);
                        }}
                      >
                        <ThumbUpAlt />
                      </IconButton>
                    </Stack>
                  )}
                </ListItem>
                <ListDivider sx={{ my: 0 }} />
              </React.Fragment>
            ))
          )}
        </List>
        {isAdmin && (
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
        )}
      </Stack>
    </>
  );
};

export const formatTags = (tags) =>
  tags
    .filter((it) => it !== "Pinned")
    .sort((a, b) => a.localeCompare(b))
    .join(", ");

export const formatLikes = (likes) => {
  if (likes) return `${likes} Likes`;
};
