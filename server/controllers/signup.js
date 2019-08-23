const handleSignUp = (db, bcrypt) => (req, res) => {
  const { name, email, secret } = req.body;
  // const salts = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(secret, 10);

  db.transaction(trx => {
    trx
      .insert({
        email,
        hash
      })
      .into("login")
      .returning("email")
      .then(returnedEmail => {
        return db("users")
          .returning("*")
          .insert({
            email: returnedEmail[0],
            name,
            joined: new Date()
          })
          .then(user => res.json(user[0]));
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => console.log(err));
};

module.exports = {
  handleSignUp
};
