import React, { useContext } from "react";
import { UserDataContext } from "../../providers/userData";

const ResultBigMacs = ({ classes, foreignData }) => {
  const { amount, data } = useContext(UserDataContext);

  const calcBigMacsLocal = () => {
    if (!data) return 0;
    return Math.floor(amount / data.locPrice);
  };

  const calcBigMacsForeign = () =>
    Math.floor(
      calcBigMacsLocal() * (foreignData.locPrice / foreignData.dolPrice)
    );

  return (
    <React.Fragment>
      {foreignData ? (
        <p className={classes.text}>
          You could buy{" "}
          <span className={classes.span}>{calcBigMacsForeign()}</span> of Big
          Macs in <span className={classes.span}>{foreignData.country}</span>{" "}
          with <span className={classes.span}>{amount}</span> of {data.country}{" "}
          money!
        </p>
      ) : (
        <p className={classes.text}>
          You can buy <span className={classes.span}>{calcBigMacsLocal()}</span>{" "}
          BigMacs for <span className={classes.span}>{amount}</span> of{" "}
          {data.country} money
        </p>
      )}
    </React.Fragment>
  );
};

export default ResultBigMacs;
