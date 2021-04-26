const connection = require('../database/connection');

const collectionName = 'users';

const createUser = async (emailUser) => {
  const { insertedId } = await connection()
    .then((db) => db.collection(collectionName).insertOne({
      emailUser,
    }));
  return insertedId;
};

const getAllUsers = async () => {
  const messagesResponse = await connection()
    .then((db) => db.collection(collectionName).find().toArray());
  return messagesResponse;
};

module.exports = {
  createUser,
  getAllUsers,
};