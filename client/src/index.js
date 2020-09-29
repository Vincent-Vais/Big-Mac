import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { UserDataProvider } from "./providers/userData";
import { ErrorsProvider } from "./providers/errors";

ReactDOM.render(
  <React.StrictMode>
    <ErrorsProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </ErrorsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
