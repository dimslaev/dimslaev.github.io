import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

export const ConfirmDialog = ({
  open,
  setOpen,
  onConfirm,
  title,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      layout="top"
      disablePortal
    >
      <ModalDialog
        sx={{
          minWidth: 300,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <Typography component="h2" level="h4" mb="1rem">
          {title}
        </Typography>

        {children}

        <Stack spacing={2}>
          <Button
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};
