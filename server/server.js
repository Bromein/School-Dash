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
const staff = require("./controllers/staff");
const quote = require("./controllers/quote");
const auth = require("./middleware/auth");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

const db = knex({
  client: "pg",
  // URI Unique resource identifier
  connection: process.env.POSTGRES_URI
});

// open endpoints
app.post("/api/login", signin.authorizeLogin(db, bcrypt));
app.post("/api/signup", signup.handleSignUp(db, bcrypt));
app.get("/api/quote", quote.handleGetQuote(db));

//gated endpoints
app.post("/api/staff", auth.requireAuth, staff.addStaff(db));
app.get("/api/staff/:id", auth.requireAuth, staff.fetchStaff(db));
app.get("/api/profile/:id", auth.requireAuth, (req, res) => {
  profile.handleGetProfile(req, res, db);
});
// app.delete
app.put("/api/profile/", profile.updateProfileBudget(db));

console.table(["Hello", "From", "The Inside :) "]);

app.listen(5001, () => console.log("listening on port 5001"));
