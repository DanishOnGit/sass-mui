import { Fab, List, ListItem, ThemeProvider, Typography } from "@mui/material";
// import { createTheme } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { CreateEvent } from "./components/CreateEvent";
import { useEffect, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { EventCard } from "./components/EventCard";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f07a7a",
      dark: "#dd5757",
    },
    typography: {
      fontFamily: "'Outfit', sans-serif",
    },
  },
});

document.addEventListener("DOMContentLoaded",()=>{
  let ogTitleMetaTag = document.querySelector('meta[property="og:title"]');
if (ogTitleMetaTag) {
    ogTitleMetaTag.content = window.location.hostname.split(".")[0];
}
console.log("Custom script executed!!!",window.location.hostname,window.origin)
})

function App() {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const themes = ["green", "blue", "orange"];

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("data.json");
      setEvents(data.eventList);
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography
          fontWeight={700}
          mt={3}
          variant="h3"
          component="h1"
          align="center"
          color="primary"
        >
          Taskify
        </Typography>
        {events.length === 0 ? (
          <Typography variant="h4" className="empty-state">No tasks added!</Typography>
        ) : (
          <Box className="boxCenter">
            <List>
              {events.map((event, idx) => (
                <ListItem key={idx}>
                  <EventCard
                    event={event}
                    events={events}
                    setEvents={setEvents}
                    cardTheme={idx >= 3 ? themes[idx % 3] : themes[idx]}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <CreateEvent open={open} setOpen={setOpen} setEvents={setEvents} />
        <Box className="add-btn">
          <Fab onClick={() => setOpen(true)} color="primary" aria-label="add">
            <AddIcon className="col-white" />
          </Fab>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
