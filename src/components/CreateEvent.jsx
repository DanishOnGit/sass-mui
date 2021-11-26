import {
  Backdrop,
  Fade,
  Modal,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  field: {
    margin: "0.5rem 0",
    padding: "0.2rem 0",
  },
  submitBtn: {
    color: "white",
  },
});
export const CreateEvent = ({ open, setOpen, setEvents }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const classes = useStyles();
  const handleClose = () => {
    resetFields();
    setOpen(false);
  };
  const resetFields = () => {
    setTitle("");
    setDesc("");
  };
  const addEventHandler = (e) => {
    e.preventDefault();
    console.log("adding event");
    setTitleError(false);
    setDescError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (desc === "") {
      setDescError(true);
    }
    if (title && desc) {
      setEvents((prev) => [
        ...prev,
        { id: uuidv4(), title, description: desc },
      ]);
      resetFields();
      handleClose();
    }
  };
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
              Add new task
            </Typography>
            <form noValidate autoComplete="off" onSubmit={addEventHandler}>
              <TextField
                required
                error={titleError}
                helperText={titleError && "Enter title"}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={classes.field}
                fullWidth
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
              <TextField
                required
                error={descError}
                helperText={descError && "Enter description"}
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                className={classes.field}
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline
                rows={3}
              />
              <Button
                type="submit"
                className={classes.submitBtn}
                fullWidth
                color="primary"
                variant="contained"
                disableElevation
              >
                Add
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
