var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
dotenv.config();
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //   res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/api", function (req, res) {
  const url = req.body.url;
  //   console.log(url);
  const key = process.env.API_KEY;
  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
  const resURL = `${baseURL}?key=${key}&url=${url}&lang=en`;
  fetch(resURL)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      res.send(data);
    });
});

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
  console.log("Example app listening on port 8082!");
});

// app.get("/test", function (req, res) {
//   res.send(mockAPIResponse);
// });
