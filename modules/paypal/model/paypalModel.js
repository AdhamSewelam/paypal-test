const mongoose = require('mongoose');
const paypalSchema = require('../schema/paypalSchema');

const Paypal = mongoose.model('paypal', paypalSchema);

module.exports = Paypal;
