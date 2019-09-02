const handleGetProfile = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch(err => res.status(400).json("error getting user"));
};

const updateProfileBudget = db => (req, res) => {
  const { id, budget } = req.body;
  db("users")
    .where({ id })
    .update({ budget }, ["budget"])
    .then(newBudget => res.json(newBudget))
    .catch(err => console.log("oops", err));
};

module.exports = {
  handleGetProfile,
  updateProfileBudget
};
