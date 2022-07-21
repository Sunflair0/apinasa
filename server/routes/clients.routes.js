const express = require("express");
const passport = require("passport");
const auth = require("../middleware/auth.middleware");
const { login, signup } = require("../models/clients.model")
const router = express.Router();


router.get("/validate", auth, (req, res) => {
  return res.send({
    success: true,
    error: null,
    data: { clienttag: req.client.clienttag },
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  return res.send({ success: true, error: null, body: null });
});

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
  const { username, password } = req.body;

  console.log("req.body", req.body);

  if (!validate(username, password)) {
   return res.send({
    success: false,
    data: null,
    error: "Invalid data provided",
    });
  }
  
  console.log("About to call 'local-login'");
  passport.authenticate("local-login", (err, client, info) => {
    
    console.log("err", err);
    console.log("client", client);
    console.log("info", info);

    if (err) {
      return res.send({ success: false, error: err, data: null });
    }
    console.log("authenticated",info)
    return res
      .cookie("jwt", info.token, { secure: true, httpOnly: true })
      .send({ success: true, error: null, data: client });
  })(req, res);
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

