const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(cors());

const menu = require("./data/menu.json");

app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery App!");
});
app.get("/menu", (req, res) => {
  res.send(menu);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
