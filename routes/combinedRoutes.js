import authorizationRoutes from "./authorizationRoutes";
import registrationRoutes from "./registrationRoutes";
import testRoutes from "./testRoutes";

export default function (router) {
  authorizationRoutes(router);
  registrationRoutes(router);
  testRoutes(router);
}