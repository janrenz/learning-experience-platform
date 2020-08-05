import * as Keycloak from "keycloak-js";

const initOptions = {
  url: "https://keycloak-keycloak.apps.who.emea-2.rht-labs.com/auth",
  realm: "myrealm",
  clientId: "myclient"
};

// const keycloak = {
//   getObj: function() {
//     return Keycloak(initOptions)
//   }
// }

export default new Keycloak(initOptions);
