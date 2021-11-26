import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardTheme: {
    backgroundColor: ({ cardTheme }) => {
      if (cardTheme === "green") {
        return "rgb(208, 252, 234)";
      }
      if (cardTheme === "blue") {
        return "rgb(220, 240, 252)";
      }
      return "rgb(252, 235, 220)";
    },
    color: ({ cardTheme }) => {
      if (cardTheme === "green") {
        return "rgb(84, 152, 124)";
      }
      if (cardTheme === "blue") {
        return "rgb(72, 99, 143)";
      }
      return "rgb(235, 163, 98)";
    },
    borderLeft: ({ cardTheme }) => {
      if (cardTheme === "green") {
        return "0.35rem solid rgb(101, 224, 172)";
      }
      if (cardTheme === "blue") {
        return "0.35rem solid rgb(101, 165, 224)";
      }
      return "0.35rem solid rgb(253, 152, 0)";
    },
    minWidth: "100%",
  },
});

export const EventCard = ({ event, cardTheme, setEvents, events }) => {
  const classes = useStyles({ cardTheme });
  const deleteEvent = (id) => {
    const result = events.filter((event) => event.id !== id);
    setEvents(result);
  };
  return (
    <Card className={classes.cardTheme} elevation={4}>
      <CardHeader
        action={
          <IconButton
            onClick={() => deleteEvent(event.id)}
            aria-label="settings"
          >
            <DeleteIcon />
          </IconButton>
        }
        title={event.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {event.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
