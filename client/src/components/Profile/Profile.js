import React from 'react';

import './profile.css';

const Profile = ({ user, logout }) => {
  return (
    <div className="profile-page">
      <div className="ui centered card">
        <div className="image">
          <img src={user.profilePic} alt={user.name} />
        </div>
        <div className="content">
          <div className="ui list">
            <div className="item">
              <i className="users icon"></i>
              <div className="content">{user.name}</div>
            </div>
            <div className="item">
              <i className="mail icon"></i>
              <div className="content">
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </div>
            </div>
          </div>
        </div>
        <button className="ui inverted secondary button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
