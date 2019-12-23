const dbModel = require("../authModel");

//If succesful, creates req.user
module.exports = async (req, res, next) => {
  const errors = [];
  const user = req.body;

  function validateLogin(user) {
    const u = req.body;

    !u.email && errors.push({ email: "Email is Required" });
    !u.password && errors.push({ password: "Password is Required" });
  }

  validateLogin(user);
  errors.length < 1 ? next() : res.status(200).json({ errors });
};
