import React from "react";
import { Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import GameStateContextProvider from "../contexts/GameStateContext";
import Square from "./Square";

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

const Board = props => {
  const { ...otherProps } = props;

  return (
    <GameStateContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="column" spacing={4} {...otherProps}>
          {[0, 3, 6].map(r => (
            <Grid item key={r}>
              <Grid container spacing={4}>
                {[0, 1, 2].map(c => (
                  <Grid item key={c}>
                    <Square square={r + c} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </GameStateContextProvider>
  );
};

export default Board;
