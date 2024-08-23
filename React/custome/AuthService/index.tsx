import Keycloak from "keycloak-js";
import { useContext } from "react";
import { userContext } from "../mineralWaterContext/UserContext";

let initOptions = {
  url: 'http://localhost:8080/',
  realm: 'master',
  clientId: 'myapp'
}


const _kc = new Keycloak(initOptions);

  _kc.init({
    onLoad: 'check-sso', // Supported values: 'check-sso' , 'login-required'
    checkLoginIframe: false,
    pkceMethod: 'S256'
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
    //    httpClient.defaults.headers.common['Authorization'] = `Bearer ${_kc.token}`;

    _kc.onTokenExpired = () => {
        console.log('token expired')
      }
    },() => {
        /* Notify the user if necessary */
        console.error("Authentication Failed");
      })
    .catch(console.error);

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getTokenParsed = () => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: ((value: boolean) => boolean | PromiseLike<boolean>) | null | undefined) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: any[]) => roles.some((role) => _kc.hasRealmRole(role));

const AuthService = {
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getTokenParsed,
  updateToken,
  getUsername,
  hasRole,
};

export default AuthService;
