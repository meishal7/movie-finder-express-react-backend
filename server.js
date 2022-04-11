const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

//const fetch = require("node-fetch");

const express = require("express");

const app = express();

const PORT = 8080;

const KEY = process.env.API_KEY;

app.use(cors());

app.use(express.json());

let movies;

app.get("/", async (req, res, next) => {
  //console.log(req.query);
  // return movies;
  //res.json({ message: "This is / route...." });

  // if (!movies) {
  const data = await axios
    .get(`http://www.omdbapi.com/?t=${req.query.id}&apikey=${KEY}`)
    .catch((error) => {
      console.error(error);
    });
  movies = data.data;
  // }
  res.send(movies);
});

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}...`);
});
