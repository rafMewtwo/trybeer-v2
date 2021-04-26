import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [loginUser, setLoginUser] = useState(
    {
      name: '',
      email: '',
      password: '',
      error: false,
      wantToSell: false,
    },
  );

  const [sidebar, setSidebar] = useState(false);
  // const getUser = () => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user;
  // };

  // const setUser = (data) => {
  //   const user = localStorage.setItem('user', JSON.stringify(data));
  //   return user;
  // };

  const contextConsts = {
    loginUser,
    setLoginUser,
    sidebar,
    setSidebar,
  };

  return (
    <UserContext.Provider value={ contextConsts }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserProvider;
