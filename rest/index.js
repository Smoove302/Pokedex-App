const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch"); // npm install node-fetch

const api = "https://pokeapi.co/api/v2/pokemon/1"; //store API URL to API
const port = 3000;

app.use(cors());

app.get("/pokemon/search", async (req, res) => {
  //async function
  let resp = await fetch(api);
  let data = await resp.json();
  console.log(data); //console.log the data from the API
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Pokemon app listening at http://localhost:${port}`);
});
