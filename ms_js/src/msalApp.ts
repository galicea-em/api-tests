//see: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/react-sample-app/src/auth-utils.js
import { UserAgentApplication  } from 'msal';
import CONFIG  from './config';

function isIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ') > -1;
  const msie11 = ua.indexOf('Trident/') > -1;   
  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;
  return msie || msie11;
}

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: CONFIG.clientId,
    authority: CONFIG.authority, //'https://login.microsoftonline.com/common',
    validateAuthority: true,
    postLogoutRedirectUri: CONFIG.postLogoutRedirectUri, //'http://localhost:3000',
    navigateToLoginRequestUrl: false
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: isIE()
  },
  system: {
    navigateFrameWait: 0
  }
});
