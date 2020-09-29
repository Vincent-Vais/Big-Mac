import React, { useEffect, useContext, useState } from "react";
import { UserDataContext } from "../providers/userData";
import { ErrorsContext } from "../providers/errors";

import Header from "./Header/Header.component";
import LocalResults from "./LocalResults/LocalResults.component";
import RandomResults from "./RandomResults/RandomResults.component";
import Errors from "./Errors";

function App() {
  const { getLocalCountryData } = useContext(UserDataContext);
  const { errors, addError } = useContext(ErrorsContext);

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched) return;
    getLocalCountryData()
      .then((resp) => setFetched(true))
      .catch((err) => {
        setFetched(true);
        addError(err);
      });
  }, [getLocalCountryData, addError, fetched]);

  return (
    <div className="app">
      {errors && <Errors errors={errors} />}
      <React.Fragment>
        <Header />
        <LocalResults />
        <RandomResults />
      </React.Fragment>
    </div>
  );
}

export default App;
