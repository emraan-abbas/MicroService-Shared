const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const routes = require("./routes/routes")


app.get("/", (req, res) =>
  res.json({"message":"Shared API Working here."})
);


app.listen(3002, () => console.log(`App listening on port 3002!`));

app.use( routes )


