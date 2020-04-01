import React from "react";
import { Grid } from "@material-ui/core";
import Square from "./Square";

const Board = props => {
  const { ...otherProps } = props;

  return (
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
  );
};

export default Board;
