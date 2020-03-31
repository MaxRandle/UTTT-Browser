import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GameStateContext } from "../contexts/GameStateContext";
import Token from "./Token";

const useStyles = makeStyles(theme => ({
  tile: {
    width: theme.tile.small.size,
    height: theme.tile.small.size
  },
  legal: {
    backgroundColor: theme.palette.secondary.main
  },
  hover: {
    backgroundColor: theme.palette.secondary.light
  }
}));

const Tile = props => {
  const { square, tile, ...otherProps } = props;
  const { gameState, playMove } = useContext(GameStateContext);
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const isLegal = () => {
    return (
      gameState.victory === false &&
      gameState.turn === -1 && // AI
      gameState.board[square][tile] === false &&
      gameState.localVictories[square] === false &&
      (gameState.lastMove.tile === square ||
        gameState.lastMove.tile === false ||
        !gameState.localVictories[gameState.lastMove.tile] === false)
    );
  };

  const handleClick = () => {
    if (isLegal()) {
      playMove({
        square,
        tile
      });
    }
  };

  return (
    <Paper
      className={`${classes.tile} ${isLegal() && classes.legal} ${isLegal() && hover && classes.hover}`}
      {...otherProps}
      onClick={() => handleClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Token token={gameState.board[square][tile]} />
    </Paper>
  );
};

export default Tile;

Tile.propTypes = {
  square: PropTypes.number.isRequired,
  tile: PropTypes.number.isRequired
};
