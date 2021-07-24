const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getAllclients,
  getByclientID,
  getByclienttag,
} = require("../models/clients.model");

router.post("/signup", (req, res) => {
  const { clienttag, password } = req.body;
  if (validate(clienttag, password)) {
    return signup(res, clienttag, password);
  }
  return res.send({
    success: false,
    data: null,
    error: "Invalid data provided",
  });
});

router.post("/login", (req, res) => {
  const { clienttag, password } = req.body;
  if (validate(clienttag, password)) {
    return login(res, clienttag, password);
  }
  return res.send({
    success: false,
    data: null,
    error: "Invalid data provided",
  });
});

function validate(clienttag, password) {
  return (
    clienttag &&
    clienttag.length >= 4 &&
    clienttag.length <= 20 &&
    password &&
    password.length >= 4 &&
    password.length <= 20
  );
}

module.exports = router;

