const express = require("express");
const authenticate = require("../middleware/authenticate.middleware");
const { login, signup, addEmail } = require("../models/users.model")
const validate = require("../middleware/validate-input")
const router = express.Router();

router.get("/logout", (req, res) => {
  res.clearCookie("access_token");
  return res.send({ success: true, error: null, body: null, });
});

router.post("/signup", validate, (req, res) => {
  signup(res, req.body.username, req.body.password);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("req.body", req.body);
  login(res, username, password);
});

router.post("/addEmail", (req, res) => {
  const { email } = req.body;
  console.log("req.body", req.body);
  addEmail(res, email);
});

router.get("/verify", authenticate, (req, res) => {
  return res.send({
    data: { username: req.users.username },
    success: true,
    error: null
  });
});

module.exports = router;