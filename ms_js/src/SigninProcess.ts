import { AuthenticationParameters } from 'msal';
import { msalApp } from './msalApp';
import { store, Actions, AuthState }  from './rdx';

export const SignoutCommand = () => {
  msalApp.logout();
  store.dispatch(
    Actions.reduxAuth.SignoutCompleteEvent()    
  );  
  console.log('logged out?');
}

export class SigninProcess {

  async OpenSigninDialogCommand() {
    msalApp.loginPopup({
      scopes: ["openid",
    ]
    } as AuthenticationParameters)
    .then(response => {
      console.log('Login succeeded: ' +JSON.stringify(response));
      store.dispatch(
        Actions.reduxAuth.SigninCompleteEvent( 
          response.idToken,
          response.account.accountIdentifier,
          response.account.userName
          ));
    })
    .catch(error => {
      console.log('Login failed!! '+JSON.stringify(error));
      store.dispatch(Actions.reduxAuth.setState(AuthState.authError));
    });
  } 
}

