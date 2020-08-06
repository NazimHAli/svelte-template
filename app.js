"use strict";

const compression = require("compression");
const express = require("express");
const path = require("path");
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "dist"),
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
