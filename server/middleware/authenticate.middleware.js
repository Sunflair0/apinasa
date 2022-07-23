const passport = require("passport");

async function authenticate(req, res, next) {
  await passport.authenticate("jwt", (err, clients, info) => {
    if (err || !clients) {
      res.clearCookie("access_token");
      return res.send({ success: false, data: null, error: info });
    }
    req.clients = clients;
    return next();
  })(req, res, next);
}

module.exports = authenticate;
