import React, { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../../providers/userData";
import { ErrorsContext } from "../../providers/errors";
import ResultBigMacs from "../ResultBigMacs/ResultBigMacs.component";
import { Paper } from "@material-ui/core";
import useStyles from "./RandomResults.styles";

const RandomResults = () => {
  const { getForeignCountryData, amount, data } = useContext(UserDataContext);
  const { addError } = useContext(ErrorsContext);

  const [countriesData, setCountriesData] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!data || fetched) return;
    getForeignCountryData()
      .then((countries) => {
        setCountriesData([...countries]);
        setFetched(true);
      })
      .catch((err) => {
        setFetched(true);
        addError(err);
      });
  }, [getForeignCountryData, data, fetched, addError]);

  const calculateWorth = (dolPrice) =>
    Math.ceil((amount * data.locPrice) / dolPrice);

  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      {countriesData.length && amount ? (
        <React.Fragment>
          {countriesData.map((foreignCountry) => (
            <div key={foreignCountry.country} className={classes.section}>
              <h2 className={classes.heading}>
                Random Country:{" "}
                <span className={classes.colored}>
                  {foreignCountry.country}
                </span>
              </h2>
              <ResultBigMacs
                foreignData={foreignCountry}
                classes={{ text: classes.text, span: classes.bold }}
              />
              <p className={classes.text}>
                Your <span className={classes.bold}>{amount}</span> in{" "}
                {data.country} currency is worth about{" "}
                <span className={classes.bold}>
                  {calculateWorth(foreignCountry.dolPrice)}
                </span>{" "}
                in{" "}
                <span className={classes.bold}>{foreignCountry.country}</span>{" "}
                currency
              </p>
            </div>
          ))}
        </React.Fragment>
      ) : null}
    </Paper>
  );
};

export default RandomResults;
