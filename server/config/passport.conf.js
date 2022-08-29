const passport = require("passport");
const { Strategy } = require("passport-jwt");
const query = require("./database.config");

function cookieExtractor(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.jwt;
  }
  return token;
}

const jwtOptions = {
  secretOrKey: process.env.SECRET_KEY,
  jwtFromRequest: cookieExtractor,
};

passport.use(
  "jwt",
  new Strategy(jwtOptions, async (payload, done) => {
    try {
      //! Try to query the database where the users id = payload.id
      const [user] = await query("SELECT * FROM users WHERE users.id = ?", [
        payload.id,
      ]);

      //! If there isn't a user, return done(null, false, "No valid user")
      if (!user) {
        return done(null, false, "No user found");
      }

      //! If there is a user, return done(null, user)
      return done(null, user);
    } catch (err) {
      //! If there was an error, return done(true, false, "Something went wrong")
      return done(true, false, "Invalid credentials");
    }
  })
);

module.exports = passport;