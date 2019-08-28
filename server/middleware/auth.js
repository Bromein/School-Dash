const redisClient = require("../controllers/signin").redisClient;
const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const decoded = jwt.verify(authorization, "supersecretshhh");
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Auth Failed"
    });
  }
  // return redisClient.get(authorization, (err, reply) => {
  //   if (err || !reply) {
  //     return res.sendStatus(401);
  //   }
  //   console.log("You may pass");
  //   return next();
  // });
};

module.exports = {
  requireAuth
};
