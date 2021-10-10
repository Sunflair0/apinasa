const passport = require("passport");

async function auth(req, res, next) {
  passport.authenticate("jwt", (err, client, info) => {
    
    console.log("Hello, from authenticate")

    if (err || info) {
      return res.send({
        success: false,
        data: null,
        error: "Invalid Credentials",
      });
    }
    req.client = client;
    return next();
  })(req, res, next);
}

module.exports = auth;
