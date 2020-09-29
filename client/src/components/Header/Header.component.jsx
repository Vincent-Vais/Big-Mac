import React, { useContext } from "react";
import { UserDataContext } from "../../providers/userData";
import { Paper, FormControl, InputLabel, Input } from "@material-ui/core";
import useStyles from "./Header.styles";

const Header = () => {
  const { data, amount, changeAmount } = useContext(UserDataContext);
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      {data && (
        <React.Fragment>
          <h1 className={classes.heading}>
            You are in <span>{data.country}</span>
          </h1>
          <FormControl className={classes.control}>
            <InputLabel className={classes.label} htmlFor="amount">
              Please enter an amount of money in your local currency
            </InputLabel>
            <Input
              id="amount"
              value={amount ? amount : ""}
              onChange={(event) => changeAmount(event.target.value)}
            />
          </FormControl>
        </React.Fragment>
      )}
    </Paper>
  );
};

export default Header;
