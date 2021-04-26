import React, { useEffect, useState } from 'react';
import FormMessage from '../components/FormMessage';
import MessageBox from '../components/MessageBox';
import { loadState } from '../utilities/localStorage';
import socket from '../utilities/socketClient';
import api from '../api/axiosApi';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ComponentChat from '../components/ComponentChat';
import './chat.css';

function ChatMessager() {
  const [emailUser, setEmailUser] = useState('');
  const [roleUser, setRoleUser] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (data) => setMessages([...messages, data]));
  }, [messages]);

  useEffect(() => {
    const reciveEmail = loadState('user');
    setEmailUser(reciveEmail.email);
    setRoleUser(reciveEmail.role);

    api.reloadChat(reciveEmail.email)
      .then((r) => {
        const newArray = r.data.map((e) => ({ data: e.message, sendAt: e.timestamp }));
        setMessages(newArray);
      }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <section className="msger">
        <ComponentChat />
        <main className="msger-chat">
          {messages.map(({ sendAt, data }, index) => (
            <MessageBox
              key={ index }
              isMine={ roleUser === 'client' }
              emailUser={ emailUser }
              sendAt={ sendAt }
              message={ data }
            />
          ))}
        </main>
        <FormMessage emailUser={ emailUser } />

      </section>
    </>
  );
}

export default ChatMessager;
