import bcrypt from "bcrypt";
import userValidator from "./helpers/validators/userValidator";
import User from "../models/User";
// constants imports //
import { SALT_ROUNDS, INVALID_INPUT_ERROR } from "./helpers/controllerConstants";

export default {
  registerAndCreateUser: (req, res) => {
    // validate input //
    const userData = req.body;
    const { errors, isValid } = userValidator(userData);
    let status;

    if (!isValid) {
      status = 400;
      return Promise.reject(INVALID_INPUT_ERROR);
    } else {
      // initiate and create a User model //
      return bcrypt.hash(userData.password, SALT_ROUNDS)
        .then((hash) => {
          const newUser = new User({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            password: hash
          });
          return newUser.save();
        })
        .then((user) => {
          return res.json({
            message: "User created",
            user: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phoneNumber: user.phoneNumber
            }
          });
        })
        .catch((error) => {
          if (error.message === INVALID_INPUT_ERROR.message) {
            return res.status(status).json({
              message: error.message,
              error: errors
            });
          } else {
            return res.status(status || 500).json({
              message: "Something went wrong on our end",
              error: error
            });
          }
        });
    }
  },
  editUser: (req, user) => {

  },
  deleteUser: (req, res) => {

  }
};