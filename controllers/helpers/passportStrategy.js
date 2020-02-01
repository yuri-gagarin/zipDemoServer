import passportJWT from "passport-jwt";
import User from "../../models/User";
import config from "../../config/config";

const { Strategy: JWTStrategy, ExtractJwt } = passportJWT;
const { secretOrKey } = config.jwt;
const options = {
  secretOrKey: secretOrKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

export default function (passport) {
  passport.use(new JWTStrategy(options, (jwtPayload, done) => {
    return User.findOne({ _id: jwtPayload._doc_._id })
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((error) => {
        return done(error, false);
      });
  }));
}
