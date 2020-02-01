import { isEmpty } from "./helpers/validators/dataValidators";

export default {
  registerAndCreateUser: (req, res) => {
    // validate input //
    const userData = req.body;
    if (isEmpty(userData)) {
      return res.status(400).json({
        message: "Invalid input"
      });
    }
    return res.status(200).json({
      message: "ok"
    });
  },
  editUser: (req, user) => {

  },
  deleteUser: (req, res) => {

  }
};