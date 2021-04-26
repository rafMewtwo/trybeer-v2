// import { bodyParser } from 'body-parser';
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan'); 
require('dotenv').config();

const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});
const error = require('./src/middlewares/error.js');
const loginRouter = require('./src/controllers/loginController.js');
const registerRouter = require('./src/controllers/registerController');
const productsRouter = require('./src/controllers/productsController.js');
const profileRouter = require('./src/controllers/profileController');
const orderController = require('./src/controllers/orderController');

const PORT = process.env.PORT || 3001;

const { createMessage,
  getMessageByNickname,
  getListAdminChat,
} = require('./src/modelsMongo/MessagesMongo');
// const { createUser, getAllUsers } = require('./src/modelsMongo/UsersMongo.js');

// Para entregar arquivos estáticos como imagens, arquivos CSS, e arquivos JavaScript
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(morgan('dev'));

app.use(express.json());

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/products', productsRouter);

app.use('/profile', profileRouter);

app.use('/orders', orderController);

app.get('/chat', async (req, res) => {
  const { emailuser } = req.headers;
  const emailUser = emailuser;
  const arrayMessages = await getMessageByNickname(emailUser);
  const convertArray = arrayMessages.map((element) => {
    const hour = element.timestamp.getHours();
    const minute = element.timestamp.getMinutes();
    return {
      emailUser: element.emailUser,
      timestamp: `${hour}:${minute}`,
      message: element.message,
    };
  });
  res.status(200).json(convertArray);
});

app.get('/chat/admin', async (req, res) => {
  // const allUsers = await getAllUsers();
  // const arrayResponse = allUsers.map(async (element) => {
  //   const array = await getMessageByNickname(element.emailUser);
  //   const lastMessage = array[array.length - 1].timestamp;
  //   return { user: element.emailUser, lastMessage };
  // });
  // Promise.all([...arrayResponse]).then((e) => res.status(200).json(e));
  const listAdmin = await getListAdminChat();
  const arrayListAdmin = listAdmin.map((element) => {
    const hour = element.timestamp.getHours();
    const minute = element.timestamp.getMinutes();
    return { user: element.email, lastMessage: `${hour}:${minute}` };
  });

  return res.status(200).json(arrayListAdmin);
});

app.use('/images', express.static(`${__dirname}/images`));

app.all('*', (_req, res) => {
  res
    .status(404)
    .json({ message: 'EndPoint não existe' });
});

app.use(error);

const getCurrentHour = () => {
  const now = new Date();
  // return `${now.getHours()}:${now.getMinutes()}`;
  return now;
};

const getCurrentHourAndMinute = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};

io.on('connection', (socket) => {
  console.log('Novo usuario conectado');

  socket.on('sendMessage', async ({ message, emailUser }) => {
    // const firstInsertion = await getMessageByNickname(emailUser);
    // if (firstInsertion.length === 0) {
    //   await createUser(emailUser);
    // }
    const timestamp = getCurrentHour();
    await createMessage(message, emailUser, timestamp);
    const data = { data: message, sendAt: getCurrentHourAndMinute() };
    io.emit('receiveMessage', data);
  });
});

// app.listen(PORT, () => console.log(`Servidor rodando na porta:  ${PORT}`));

httpServer.listen(PORT, () => console.log('App rodando na porta 3001'));
