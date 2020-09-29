const express = require("express"),
  cors = require("cors");

const dataRoute = require("./routes/data");
const errorHandler = require("./handlers/error");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/api/data", dataRoute);

app.use((req, res, next) => {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, console.log(`Server has started on PORT ${PORT}`));
