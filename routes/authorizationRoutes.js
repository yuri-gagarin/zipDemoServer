import authorizationsController from "../controllers/authorizationsController";

export default function (router) {

  // @route POST /api/authorizations/login_user //
  // @desc Logs in a user and sets a JWT token //
  // @access PUBLIC //
  router
    .route("/api/authorizations/login_user")
    .post(authorizationsController.loginUser);
  
  // @route POST /api/authorizations/logout_user //
  // @desc Logs out a user and destroys a JWT token //
  // @access PUBLIC //
  router
    .route("/api/authorizations/logout_user")
    .post(authorizationsController.logoutUser);
}