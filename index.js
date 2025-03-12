const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 4000;

app.use(cors());

const menu = require("./data/menu.json");
app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery App!");
});
app.get("/menu", (req, res) => {
  res.send(menu);
});

app.get("/menu/menu/pizza/:id", (req, res) => {
  const id = req.params.id;
  const pizza = menu.menu.pizza.find((pizza) => pizza.id === parseInt(id));
});

app.get("/menu/menu/pasta/:id", (req, res) => {
  const id = req.params.id;
  const pasta = menu.menu.pasta.find((pasta) => pasta.id === parseInt(id));
});
app.get("/menu/menu/calzone/:id", (req, res) => {
  const id = req.params.id;
  const calzone = menu.menu.calzone.find(
    (calzone) => calzone.id === parseInt(id)
  );
});
app.get("/menu/menu/sandwiches/:id", (req, res) => {
  const id = req.params.id;
  const sandwiches = menu.menu.sandwiches.find(
    (sandwiches) => sandwiches.id === parseInt(id)
  );
});
app.get("/menu/menu/fries/:id", (req, res) => {
  const id = req.params.id;
  const fries = menu.menu.fries.find((fries) => fries.id === parseInt(id));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
