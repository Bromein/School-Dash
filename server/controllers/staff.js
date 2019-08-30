const addStaff = db => (req, res) => {
  const { id, staffName, staffPosition, staffSalary, hireDate } = req.body;
  db("staff")
    .insert({
      author_id: id,
      staff_name: staffName,
      staff_position: staffPosition,
      staff_salary: staffSalary,
      hire_date: hireDate
    })
    .then(res.sendStatus(200))
    .catch(err => console.log(err));
};

const fetchStaff = db => (req, res) => {
  return (
    db("staff")
      .where({
        author_id: req.params.id
      })
      //receiving post array here and sending it to the front end
      .then(data => res.send(data))
  );
};

const deleteStaff = () => (req, res) => {};

module.exports = {
  addStaff,
  deleteStaff,
  fetchStaff
};

// db.select("*")
//   .from("users")
//   .where({ id })
//   .then(user => {
//     if (user.length) {
//       res.json(user[0]);
//     } else {
//       res.status(400).json("Not found");
//     }
//   })
//   .catch(err => res.status(400).json("error getting user"));
