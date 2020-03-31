import React from "react";
import PropTypes from "prop-types";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    width: "70%",
    height: "70%",
    margin: "15%"
  }
}));

const Token = props => {
  const { token, ...otherProps } = props;
  const classes = useStyles();

  return (
    <>
      {token === -1 && (
        <RadioButtonUncheckedIcon {...otherProps} className={classes.icon} htmlColor="white" viewBox="2 2 20 20" />
      )}
      {token === 1 && <CloseIcon {...otherProps} className={classes.icon} htmlColor="red" viewBox="5 5 14 14" />}
    </>
  );
};

export default Token;

Token.propTypes = {
  token: PropTypes.oneOf([1, -1, false]).isRequired
};
