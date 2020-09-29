const CSVToJSON = require("csvtojson");

function sendData(req, res, next) {
  CSVToJSON()
    .fromFile("big-mac-index.csv")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = sendData;
