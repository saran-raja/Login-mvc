const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/registered-data", userController.register);
router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/login-data", userController.login);
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
