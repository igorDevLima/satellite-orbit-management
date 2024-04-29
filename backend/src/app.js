const express = require("express");

//routes imports
const spaceStation = require("./spaceStation/spaceStation");

const app = express();

app.use(express.json());

app.disable("x-powered-by");

app.use("/space-station", spaceStation);

module.exports = app;
