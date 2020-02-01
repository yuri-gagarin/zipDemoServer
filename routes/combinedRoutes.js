import registrationRoutes from "./registrationRoutes";
import testRoutes from "./testRoutes";

export default function (router) {
  registrationRoutes(router);
  testRoutes(router);
}