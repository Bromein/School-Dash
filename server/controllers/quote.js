const handleGetQuote = db => (req, res) => {
  db.select("*")
    .from("quotes")
    .then(quote => {
      if (quote[0].id && quote[0].content) {
        res.json(quote[Math.floor(Math.random() * Math.floor(11))]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch(err => res.status(400).json("error getting user"));
};

module.exports = {
  handleGetQuote
};
