const express = require("express");
const app = express();

app.get("/analytics", (req, res) => {
  console.log("recieved on /analytics");
  res.sendStatus(204);
})

app.post("/", (req, res) => {
  console.log(`url ${req.query.url} time ${req.query.time} body ${req.body}`);
  res.sendStatus(204);
})

app.listen(8081, () => console.log("Listening on 8081"))