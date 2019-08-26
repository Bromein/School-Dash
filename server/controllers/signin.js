const jwt = require("jsonwebtoken");
const redis = require("redis");

//setting up redis
const redisClient = redis.createClient(process.env.REDIS_URI);

const handleSignIn = (db, bcrypt, req, res) => {
  const { email, secret } = req.body;
  if (!email || !secret) {
    return Promise.reject("invalid form data");
  }
  return db
    .select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then(data => {
      const isValid = bcrypt.compareSync(secret, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then(user => user[0])
          .catch(err => Promise.reject("Unable to get user"));
      } else {
        Promise.reject("Wrong username/password");
      }
    })
    .catch(err => Promise.reject("Invalid username or password"));
};

const getauthTokenId = (req, res) => {
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.sendStatus(400, "Unauthorized");
    }
    return res.json({ id: reply });
  });
};

const signToken = email => {
  const jwtPayload = { email };
  return jwt.sign(jwtPayload, "JWT_SECRET", { expiresIn: "3 hours" });
};

const setToken = (key, value) => {
  return Promise.resolve(redisClient.set(key, value));
};
const createSession = async user => {
  // create JWT token, return user data
  const { email, id } = user;
  const token = signToken(email);
  try {
    await setToken(token, id);
    return {
      success: "true",
      userId: id,
      token
    };
  } catch (err) {
    return console.log(err);
  }
  // return { success: "true", userInfo: { ...others }, token };
};

const authorizeLogin = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization
    ? getauthTokenId(req, res)
    : handleSignIn(db, bcrypt, req, res)
        .then(data => {
          return data.id && data.email
            ? createSession(data)
            : Promise.reject(data);
        })
        .then(session => res.json(session));
  // .catch(err => res.status(400).json("err"));
};

module.exports = {
  authorizeLogin
};
