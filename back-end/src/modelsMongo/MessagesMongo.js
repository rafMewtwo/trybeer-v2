const connection = require('../database/connection');
// const { ObjectId } = require('mongodb');
const collectionName = 'messages';

const createMessage = async (message, emailUser, timestamp) => {
  const { insertedId } = await connection()
    .then((db) => db.collection(collectionName).insertOne({
      message, emailUser, timestamp,
    }));
  return insertedId;
};

const getMessageByNickname = async (emailUser) => {
  const menssageResponse = await connection()
    .then((db) => db.collection(collectionName).find({
      emailUser,
    }).toArray());
  return menssageResponse;
};

const getAllMessages = async () => {
  const messagesResponse = await connection()
    .then((db) => db.collection(collectionName).find().toArray());
  return messagesResponse;
};

const getListAdminChat = async () => {
  const list = await connection()
    .then((db) => db.collection(collectionName).aggregate([
      { $group: { _id: '$emailUser', timestamp: { $max: '$timestamp' } } },
      { $project: { _id: 0, email: '$_id', timestamp: '$timestamp' } },
   ]).toArray());
  return list;
};

// const deleteById = async (id) => {

//   const product = await connection()
//     .then((db) => db.collection(collectionName).findOne(ObjectId(id)));

//   if(!product) return false;

//   await connection()
//     .then((db) => db.collection(collectionName).deleteOne({
//       _id: ObjectId(id)
//     }));

//   return product;
// };

module.exports = {
  createMessage,
  getMessageByNickname,
  getAllMessages,
  getListAdminChat,
  // deleteById,
};
