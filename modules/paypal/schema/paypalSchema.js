const mongoose = require('mongoose');

const paypalSchema = new mongoose.Schema({
  id_paypal: String,
  status: String,
  purchase_units: [
    {
      amount: {
        currency_code: String,
        value: String,
      },
      payee: {
        email_address: String,
        merchant_id: String,
      },
      shipping: {
        name: {
          full_name: String,
        },
        address: {
          address_line_1: String,
          admin_area_2: String,
          postal_code: String,
          country_code: String,
        },
      },
      payments: {
        captures: [
          {
            id: String,
            status: String,
            amount: {
              currency_code: String,
              value: String,
            },
          },
        ],
      },
    },
  ],
  payer: {
    name: {
      given_name: String,
      surname: String,
    },
    email_address: String,
    payer_id: String,
    address: {
      country_code: String,
    },
  },
});

module.exports = paypalSchema;
