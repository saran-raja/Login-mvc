const { where } = require("sequelize");
const db = require("../config/config");
const students = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = students.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.send("created");
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
};
const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const student = await students.findOne({ where: { userName } });
    if (!student) {
      return res.status(404).send("User not found");
    }
    const passwordCheck = await bcrypt.compare(password, student.password);
    // console.log("=>", passwordCheck);
    if (passwordCheck) {
      res.send("Login successfull");
    } else {
      res.send("Login failed");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { register, login };



