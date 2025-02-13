const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const filePath = path.join(__dirname, "menu.json");

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Michael Johnson" },
];

app.get("/menu", async (req, res) => {
  try {
    const menu = await fs.promises.readFile(filePath, "utf8");
    res.json(JSON.parse(menu));
  } catch (error) {
    console.error("Error reading menu:", error);
    res.status(500).send("Error reading menu");
  }
})
app.get("/", (req, res) => {
  res.send('menu');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
