import React, { useState } from 'react';
import PropTypes from 'prop-types';

import socket from '../utilities/socketClient';

function FormMessage({ emailUser }) {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', { message, emailUser });
  };

  return (
    <form className="msger-inputarea">
      <input
        type="text"
        className="msger-input"
        placeholder="Digite uma mensagem..."
        data-testid="message-input"
        onChange={ (e) => setMessage(e.target.value) }
      />

      <button
        type="submit"
        className="msger-send-btn"
        onClick={ handleSend }
        data-testid="send-message"
      >
        Enviar
      </button>
    </form>
  );
}

const { string } = PropTypes;

FormMessage.propTypes = {
  emailUser: string.isRequired,
};

export default FormMessage;
