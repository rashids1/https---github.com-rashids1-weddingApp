"use strict";

const express = require("express");
const morgan = require("morgan");
var cors = require("cors");

const { getDBinfo, submitToDb } = require("./handlers");

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  .get("/getInfo", getDBinfo)
  .post("/submitToDb", submitToDb)

  //add endpoints here
  //handle 404s

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
