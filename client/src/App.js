import React from 'react';
import GoogleLogin from './components/GoogleLogin/GoogleLogin';
import Profile from './components/Profile/Profile';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    userProfile: null,
  };

  login = (userData) => {
    this.setState({
      isLoggedIn: true,
      userProfile: userData.user,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
      userProfile: null,
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <Profile user={this.state.userProfile} logout={this.logout} />
        ) : (
          <GoogleLogin login={this.login} />
        )}
      </>
    );
  }
}

export default App;
