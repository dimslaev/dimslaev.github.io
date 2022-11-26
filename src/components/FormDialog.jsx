import * as React from "react";
import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/joy/Autocomplete";
import ListItem from "@mui/joy/ListItem";

export const FormDialog = ({
  title,
  open,
  setOpen,
  onSubmit,
  tags,
  initialData,
}) => {
  const formData = React.useRef(initialData);

  React.useEffect(() => {
    formData.current = initialData;
  }, [Object.keys(initialData).length]);

  const onChange = (e) => {
    formData.current[e.target.name] = e.target.value;
  };

  const onAutoCompleteChange = (_, value) => {
    formData.current.tags = value;
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      layout="top"
      disablePortal
    >
      <ModalDialog
        sx={{
          minWidth: 600,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          fontFamily: "sans-serif",
        }}
      >
        <Typography component="h2" level="h4" mb="1rem">
          {title}
        </Typography>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(formData.current);
            setOpen(false);
          }}
        >
          <Stack spacing={2}>
            <TextField
              type="url"
              pattern="https?://.+"
              label="URL"
              name="url"
              defaultValue={initialData.url}
              onChange={onChange}
              autoFocus
              required
            />

            <TextField
              label="Title"
              name="title"
              defaultValue={initialData.title}
              onChange={onChange}
              required
            />

            <TextField
              label="Description"
              name="description"
              defaultValue={initialData.description}
              onChange={onChange}
            />

            <ListItem>Tags</ListItem>

            <Autocomplete
              multiple
              label="Tags"
              placeholder="Tags"
              options={tags.map((it) => it.key)}
              defaultValue={initialData.tags}
              onChange={onAutoCompleteChange}
              componentsProps={{
                listbox: {
                  disablePortal: true,
                },
                clearIndicator: {
                  sx: {
                    display: "none",
                  },
                },
              }}
            />

            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};
