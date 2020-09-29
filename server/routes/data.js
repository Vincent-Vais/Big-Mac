const express = require("express"),
  sendData = require("../handlers/data");

const router = express.Router();

router.get("/", sendData);

module.exports = router;
