import { Button, ThemeProvider, Typography } from "@mui/material";
// import { createTheme } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { CreateEvent } from "./components/CreateEvent";
import { useState } from "react";
import { createTheme, adaptV4Theme } from "@mui/material/styles";
// const theme = createTheme(adaptV4Theme({
//   palette: {
//     primary: {
//       main: "#f07a7a",
//     },
//   },
//   typography: {
//     fontFamily: "'Outfit', sans-serif",
//   },
// }))
const theme = createTheme({
  palette: {
    primary: {
      main: "#f07a7a",
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
  },
});

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="app-name"
          color="primary"
        >
          Kalendly
        </Typography>
        <CreateEvent open={open} setOpen={setOpen} />
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
        
          className="add-btn"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
