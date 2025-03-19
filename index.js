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

// Route to get all pizza items
app.get("/menu/pizza", (req, res) => {
  const pizzas = menu.menu.pizza;
  if (!pizzas || pizzas.length === 0) {
    return res.status(404).json({ message: "No pizzas found" });
  }
  return res.json(pizzas);
});

app.get("/menu/menu/pizza/:id", (req, res) => {
  const id = req.params.id;
  const pizza = menu.menu.pizza.find((pizza) => pizza.id === parseInt(id));
  if (!pizza) {
    return res.status(404).json({ message: "Pizza not found" });
  }
  return res.json(pizza);
});

app.get("/menu/menu/pasta/:id", (req, res) => {
  const id = req.params.id;
  const pasta = menu.menu.pasta.find((pasta) => pasta.id === parseInt(id));
  if (!pasta) {
    return res.status(404).json({ message: "Pasta not found" });
  }
  return res.json(pasta);
});

app.get("/menu/menu/calzone/:id", (req, res) => {
  const id = req.params.id;
  const calzone = menu.menu.calzone.find(
    (calzone) => calzone.id === parseInt(id)
  );
  if (!calzone) {
    return res.status(404).json({ message: "Calzone not found" });
  }
  return res.json(calzone);
});

app.get("/menu/menu/sandwiches/:id", (req, res) => {
  const id = req.params.id;
  const sandwiches = menu.menu.sandwiches.find(
    (sandwiches) => sandwiches.id === parseInt(id)
  );
  if (!sandwiches) {
    return res.status(404).json({ message: "Sandwich not found" });
  }
  return res.json(sandwiches);
});

app.get("/menu/menu/fries/:id", (req, res) => {
  const id = req.params.id;
  const fries = menu.menu.fries.find((fries) => fries.id === parseInt(id));
  if (!fries) {
    return res.status(404).json({ message: "Fries not found" });
  }
  return res.json(fries);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
