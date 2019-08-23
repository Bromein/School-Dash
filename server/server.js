const express = require("express");
const bcrypt = require("bcryptjs");
const knex = require("knex");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const signin = require("./controllers/signin");
const signup = require("./controllers/signup");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

const db = knex({
  client: "pg",
  // URI Unique resource identifier
  connection: process.env.POSTGRES_URI
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from the API"
  });
});

app.post("/api/", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created",
        authData
      });
    }
  });
});

app.post("/api/login", signin.authorizeLogin(db, bcrypt));
// app.get("/api/login", (req, res) => {
//   res.send("ITS WORKIN BOI");
// });

app.post("/api/signup", signup.handleSignUp(db, bcrypt));

// Verify the token
function verifyToken(req, res, next) {
  //Auth header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //if defined, split by the space bearer <token_id>
    const bearer = bearerHeader.split(" ");
    //get token from the bearer array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

console.table([
  process.env.POSTGRES_HOST,
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER
]);

app.listen(5001, () => console.log("listening on port 5001"));
