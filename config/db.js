const mongoose = require('mongoose');

// CONNECT TO MONGODB
const db = () => {
  mongoose
    .connect(process.env.MONGO_ATLAS)
    .then((result) => {
      console.log('MONGO_DB CONNECTED');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
