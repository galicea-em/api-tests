import React, { Component, } from 'react';
import { connect } from 'react-redux';

import { AppState }  from './rdx';
import SigninPage from './SigninPage';
 
interface AppProps   {
  auth? : any;
}

const mapStateToProps = (state: AppState) => ({
  auth: state.reduce.reduxAuth,
});
          

class App extends Component<AppProps, any> {
  
  render() {
    return (
      this.props.auth.userName? 
       <div>
          Logowanie poprawne!<br />
          witaj { this.props.auth.userName }<br />
          token: { JSON.stringify(this.props.auth.idToken) }
       </div>
    :
      <div>
        <SigninPage />
      </div>
    );
    }
    
}

export default connect( mapStateToProps )(App );
