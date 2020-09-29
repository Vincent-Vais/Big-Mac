import React, { useContext } from "react";
import { UserDataContext } from "../../providers/userData";
import ResultBigMacs from "../ResultBigMacs/ResultBigMacs.component";
import { Paper, LinearProgress } from "@material-ui/core";
import useStyles from "./LocalResults.styles";

const LocalResults = () => {
  const { data, amount } = useContext(UserDataContext);
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      {amount && data ? (
        <React.Fragment>
          <ResultBigMacs
            classes={{ text: classes.text, span: classes.colored }}
          />
          <p className={classes.text}>
            Your Dollar Purchasing Parity (PPP) is{" "}
            <span className={classes.colored}>{data.purchPower}</span>
          </p>
        </React.Fragment>
      ) : (
        <LinearProgress color="secondary" className={classes.progress} />
      )}
    </Paper>
  );
};

export default LocalResults;
