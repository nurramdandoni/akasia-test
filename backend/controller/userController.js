const { where } = require("sequelize");
const { User } = require("../models");

exports.cekUser = async (req, res) => {
  const { body } = req;
  console.log(body);
  const cekUser = await User.findOne({
    where: {
      userId: body.userId,
      password: body.password,
    },
  });
  if (cekUser != null) {
    res.status(200).json({ message: "Login successfully.", data: cekUser });
  } else {
    res.status(200).json({ message: "Problem to Login" });
  }
};
