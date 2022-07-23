const express = require("express");
const authenticate = require("../middleware/authenticate.middleware");
const { login, signup } = require("../models/clients.model")
const validate = require("../middleware/validate-input")
const router = express.Router();

router.get("/logout", (req, res) => {
  res.clearCookie("access_token");
  return res.send({ success: true, error: null, body: null, });
});

router.post("/signup", validate, (req, res) => {
  signup(res, req.body.clienttag, req.body.password);
});

router.post("/login", (req, res) => {
  const { clienttag, password } = req.body;
  console.log("req.body", req.body);
  login(res, clienttag, password);
});

router.get("/verify", authenticate, (req, res) => {
  return res.send({
      data: { clienttag: req.clients.clienttag },
      success: true,
      error: null
  });
});

module.exports = router;