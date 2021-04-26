import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../context/UserContext';
import { login } from '../api/axiosApi';

import { Container, Content } from '../components/styled-components';
import { Button, Input, Title } from '../components';

const redirectIf = (pacote, history) => {
  if (pacote.role === 'client') {
    history.push({ pathname: '/products' });
  } else if (pacote.role === 'administrator') {
    history.push({ pathname: '/admin/orders' });
  } else {
    history.push({ pathname: '/register' });
  }
};

const inputEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const PASSWORD_MIN_SIZE = 6;

export default function Login() {
  const history = useHistory();
  const { loginUser, setLoginUser } = useContext(UserContext);
  const [loginUserLocal, setLoginUserLocal] = useState({ email: '', password: '' });

  const handleLogin = async (dataUser) => {
    const pacote = await login(dataUser);
    localStorage.setItem('user', JSON.stringify(pacote));
    setLoginUser({ ...loginUser, pacote });
    redirectIf(pacote, history);
  };

  const hc = ({ target }) => {
    const { name, value } = target;
    setLoginUserLocal({ ...loginUserLocal, [name]: value });
  };

  const { email, password } = loginUserLocal;
  const activeButton = inputEmail.test(email) && password.length >= PASSWORD_MIN_SIZE;

  return (
    <section>
      <Container>
        <Content>
          <Title title="Login" />
          <Input
            type="email"
            id="email-input"
            name="email"
            onChange={ hc }
            label="Email"
            readOnly={ false }
            value={ email }
          />
          <Input
            type="password"
            id="password-input"
            name="password"
            onChange={ hc }
            label="Senha"
            readOnly={ false }
            value={ password }
          />
          <Button
            type="button"
            id="signin-btn"
            label="Entrar"
            disabled={ !activeButton }
            onClick={ () => handleLogin(loginUserLocal) }
          />
          <Button
            type="button"
            id="no-account-btn"
            label="Ainda não tenho conta"
            onClick={ () => history.push('/register') }
            disabled={ false }
          />
        </Content>
      </Container>
    </section>
  );
}
