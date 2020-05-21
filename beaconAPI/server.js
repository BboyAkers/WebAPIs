const express = require("express");
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.post("/analytics", (req, res) => {
  console.log("recieved on /analytics");
  console.log(req.body)
  res.sendStatus(204);
})

app.post("/", (req, res) => {
  res.sendStatus(204);
})

app.listen(8081, () => console.log("Listening on 8081"))