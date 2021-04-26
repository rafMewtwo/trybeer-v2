import React, { useContext, useState } from 'react';
import withAuth from '../components/hocs/withAuth';
import { edit } from '../api/axiosApi';
import UserContext from '../context/UserContext';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Container, Content, Input, Button, Message } from '../styles/styles';

function Profile() {
  const { loginUser, setLoginUser } = useContext(UserContext);
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  const localStorageProfile = JSON.parse(localStorage.getItem('user'));

  const user = JSON.parse(localStorage.getItem('user'));
  const { role } = user;

  const idProfile = localStorageProfile.id;
  const nameProfile = localStorageProfile.name;
  const emailProfile = localStorageProfile.email;
  const handleProfile = async (id, name, email) => {
    id = idProfile;
    name = loginUser.name;
    email = emailProfile;
    setConfirmationMessage(true);
    await edit(id, name, email);
  };

  return (
    <div>
      <Header isAdmin={ role === 'administrator' } />
      <Navbar title="Meu perfil" data-testid="top-title" className="top-title" />
      <Container>
        <Content>
          <div>
            <Input
              name="name"
              data-testid="profile-name-input"
              placeholder={ nameProfile }
              onChange={ (event) => setLoginUser(
                { ...loginUser, name: event.target.value },
              ) }
            />
            <Input
              placeholder="Email"
              readOnly
              data-testid="profile-email-input"
              value={ emailProfile }
            />
            <Button
              type="button"
              data-testid="profile-save-btn"
              disabled={ loginUser.name === '' }
              onClick={ () => handleProfile() }
            >
              Salvar
            </Button>
            {confirmationMessage && <Message>Atualização concluída com sucesso</Message>}
          </div>

        </Content>
      </Container>
    </div>
  );
}

export default withAuth(Profile);
