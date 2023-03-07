const mongoose = require('mongoose');
require('dotenv').config();

// CONNECT TO MONGODB
const db = () => {
  const uri = process.env.MONGO_ATLAS;
  console.log(uri);
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
      console.log('MONGO_DB CONNECTED');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
