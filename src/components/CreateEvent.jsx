import {
  Backdrop,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
  field: {
    margin: "0.5rem 0",
  },
});
export const CreateEvent = ({ open, setOpen }) => {
  const classes = useStyles()
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="modal">
            <Typography
              className="modal-title"
              id="transition-modal-title"
              variant="h6"
              component="h2"
              align="center"
            >
              Add new event
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
               className={classes.field}
                fullWidth
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
              <TextField
               className={classes.field}
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline
                rows={2}
              />
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
