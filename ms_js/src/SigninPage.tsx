import React from 'react';
import {
  Text,
  PrimaryButton
} from 'office-ui-fabric-react';
import { SigninProcess } from './SigninProcess';


interface SigninPageProps {

}

export default class SigninPageComponent extends React.Component<SigninPageProps> {

  signin() {
   const p = new SigninProcess();
    p.OpenSigninDialogCommand()
  }

  render() {
    return(
      <> 
          <div>
          <Text variant="xLargePlus">
            Logowanie Microsoft 365
          </Text>
          </div>
          <PrimaryButton
            onClick={() => this.signin()}
          >
            Zaloguj
          </PrimaryButton>
        
      </>
    )
  }
}
