import { IdToken } from 'msal/lib-commonjs/IdToken';
import { definition, } from 'redux-compact';

export enum AuthState{
  authNone,
  authPending,
  authError,
  authDone
}


export interface AuthStore {
  authState: AuthState;
  userName : string;
  accountIdentifier : string;
  idToken?: IdToken;
  signinProcess? : any
};

export const reduxAuth = definition<AuthStore>()
  .setDefault(
    { 
      authState: AuthState.authNone,
      userName : '',
      accountIdentifier : ''
        })
  .addReducers({

    setState: (store : AuthStore, newState : AuthState) => (
      {...store, authState : newState }),

    SigninCompleteEvent : (store : AuthStore, idToken: IdToken, 
                  accountIdentifier : string, userName : string ) =>
    ( { ...store, idToken: idToken, accountIdentifier : accountIdentifier,
        userName : userName }
    ),

    SignoutCompleteEvent : (store : AuthStore) =>  
    ({ ...store, accountIdentifier : '', userName : '' }),


    });

