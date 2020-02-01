import User from "../models/User";

export default {
  loginUser: (req, res) => {
    const { email, password } = req.body;
    let status;

    return User.findOne({ email: email })
      .then((user) => {
        if (user) {
          if (user.password === password) {
            return res.json({
              message: "User logged in",
              user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName
              }
            });
          } else {
            status = 400;
            return Promise.reject(new Error("Invalid login or password"));
          }
        } else {
          status = 400;
          return Promise.reject(new Error("No user found"));
        }
      })
      .catch((error) => {
        return res.status(status || 500).json({
          message: "Something went wrong",
          error: error
        });
      });
  },
  logoutUser: (req, res) => {

  }
};