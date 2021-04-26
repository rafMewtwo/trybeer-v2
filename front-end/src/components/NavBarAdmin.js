import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { LinkElement } from './index';
import { DivNavContainer, DivNavContent } from './styled-components';
import SidebarData from './SidebarData';
import SidebarAdminData from './SidebarAdminData';

const NavbarAdmin = () => {
  const { sidebar, setSidebar } = useContext(UserContext);
  const [data, setData] = useState([]);
  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => localStorage.clear();

  useEffect(() => {
    const user = JSON.parse(localStorage.user);

    if (user && user.role === 'administrator'
      ? setData(SidebarAdminData)
      : setData(SidebarData));
  }, []);

  return (
    <DivNavContainer
      isAdmin
      // style={ sidebar ? { width: '100%' } : { width: '0%' } }
    >
      <DivNavContent
        className="admin-side-bar-container"
      >
        {
          data.map((link, index) => (
            <LinkElement
              key={ index }
              id={ link.id }
              label={ link.label }
              to={ link.path }
              onClick={ showSidebar }
            />
          ))
        }
        <LinkElement
          id="side-menu-item-logout"
          label="Sair"
          to="/login"
          onClick={ () => logout() }
        />
      </DivNavContent>
    </DivNavContainer>
  );
};

export default NavbarAdmin;
