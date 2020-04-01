import React from "react";
import Board from "./Board";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";
import GameStateContextProvider from "../contexts/GameStateContext";
import ControlBar from "./ControlBar";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#263690"
    }
  },
  spacing: 4,
  tile: {
    small: {
      size: 40
    },
    large: {
      size: 128
    }
  }
});

function App() {
  return (
    <GameStateContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={4}>
          <Grid item>
            <ControlBar />
          </Grid>
          <Grid item>
            <Board />
          </Grid>
        </Grid>
      </ThemeProvider>
    </GameStateContextProvider>
  );
}

export default App;
