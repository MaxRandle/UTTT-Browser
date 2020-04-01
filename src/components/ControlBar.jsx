import React, { useState, useContext, useEffect } from "react";
import { LinearProgress, Paper, Card, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GameStateContext } from "../contexts/GameStateContext";
import { getBoardEval } from "../AI.js";

const useStyles = makeStyles(theme => ({
  spacer: {
    height: "4px"
  }
}));

const ControlBar = () => {
  const classes = useStyles();
  const { gameState } = useContext(GameStateContext);
  const [loading, setLoading] = useState(true);
  const [evaluation, setEvaluation] = useState(0);

  const evaluateBoard = gs => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ev = getBoardEval(gs);
        resolve(ev);
      }, 0);
    });
  };

  useEffect(() => {
    if (gameState.turn === -1) {
      const evaluateBoardAsync = async () => {
        try {
          setLoading(true);
          const ev = await evaluateBoard(gameState);
          // console.log(`Eval: ${ev}`);
          setEvaluation(ev);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      evaluateBoardAsync();

      // evaluateBoard(gameState)
      //   .then(ev => {
      //     console.log(`Eval: ${ev}`);
      //     setEvaluation(ev);
      //   })
      //   .finally(setLoading(false));
    }
  }, [gameState]);

  return (
    <Card>
      {/* {loading && <LinearProgress />}
      {!loading && <div className={classes.spacer} />} */}
      <CardHeader title={`Evaluation: ${evaluation}`} />
    </Card>
  );
};

export default ControlBar;
