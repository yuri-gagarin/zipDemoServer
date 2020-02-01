import userValidator from "./helpers/validators/userValidator";
import User from "../models/User";

export default {
  registerAndCreateUser: (req, res) => {
    // validate input //
    const userData = req.body;
    const { errors, isValid } = userValidator(userData);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid input",
        errors: errors
      });
    } else {
      // initiate and create a User model //
      return User.create(userData)
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
          return res.status(500).json({
            message: "Something went wrong on our end",
            error: error
          });
        });
    }
    
  },
  editUser: (req, user) => {

  },
  deleteUser: (req, res) => {

  }
};