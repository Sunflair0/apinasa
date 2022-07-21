const passport = require("passport");

async function auth(req, res, next) {
  await passport.authenticate("jwt", (err, client, info) => {
    
    console.log("Hello, from authenticate")

    if (err || !client) {
      return res.send({


        success: false,
        data: null,
        error: info,
      });
    }
    req.client = client;
    return next();
  })(req, res, next);
}

module.exports = auth;
