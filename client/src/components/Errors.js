import React from "react";
import { Paper } from "@material-ui/core";

const Errors = ({ errors }) => {
  return (
    <Paper elevation={3}>
      {errors.map((err, i) => (
        <p key={i}>{err.message}</p>
      ))}
    </Paper>
  );
};

export default Errors;
