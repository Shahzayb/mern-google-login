import React from 'react';
import GoogleLogin from 'react-google-login';
import { login } from '../api/googleAuth';

export default props => {
  const responseGoogle = async authResult => {
    try {
      if (authResult['code']) {
        const result = await login(authResult['code']);
        console.log(authResult);
        props.login(result);
      } else {
        // There was an error.
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GoogleLogin
      clientId="paste your client id here"
      buttonText="Login"
      responseType="code"
      redirectUri="postmessage"
      scope="openid email profile"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};
