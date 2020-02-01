import registrationsController from "../controllers/registrationsController";

export default function (router) {

  // @route POST /api/registrations/register //
  // @desc Registers a user and creates a User model //
  // @access PUBLIC //
  router
    .route("/api/registrations/register")
    .post(registrationsController.registerAndCreateUser);
  
  // @route PATCH /api/registrations/edit_user //
  // @desc Updates a user profile, updates a User model //
  // @access PRIVATE //

  router
    .route("/api/registrations/update_user")
    .patch(registrationsController.editUser);
  
  // @route DELETE /api/registrations/delete_user //
  // @desc Deletes a user Model //
  // @access PRIVATE //
  router
    .route("/api/registrations/delete_user")
    .delete(registrationsController.deleteUser);
}