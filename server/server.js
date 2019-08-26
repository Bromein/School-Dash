const express = require("express");
const bcrypt = require("bcryptjs");
const knex = require("knex");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const signin = require("./controllers/signin");
const signup = require("./controllers/signup");
const profile = require("./controllers/profile");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

const db = knex({
  client: "pg",
  // URI Unique resource identifier
  connection: process.env.POSTGRES_URI
});

app.post("/api/login", signin.authorizeLogin(db, bcrypt));

app.post("/api/signup", signup.handleSignUp(db, bcrypt));

app.get("/api/profile/:id", (req, res) => {
  profile.handleGetProfile(req, res, db);
});

console.table([
  process.env.POSTGRES_HOST,
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER
]);

app.listen(5001, () => console.log("listening on port 5001"));
