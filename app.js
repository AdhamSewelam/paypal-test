const express = require('express');
const app = express();
require('dotenv').config();
const paypalRoutes = require('./modules/paypal/routes/paypalRoutes');
const db = require('./config/db');
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

db();

app.use(paypalRoutes); 

// define an array off orders
// const orders = [
//   {
//     id: '2XA64456WR644045Y',
//     status: 'COMPLETED',
//     purchase_units: [
//       {
//         amount: {
//           currency_code: 'USD',
//           value: '130.00',
//         },
//         payee: {
//           email_address: 'sb-vvyyk25208983@business.example.com',
//           merchant_id: '9THFCR58KK3K4',
//         },
//         shipping: {
//           name: {
//             full_name: 'John Doe',
//           },
//           address: {
//             address_line_1: 'Free Trade Zone',
//             admin_area_2: 'Cairo',
//             postal_code: '20',
//             country_code: 'EG',
//           },
//         },
//         payments: {
//           captures: [
//             {
//               id: '2JB69179MK064850M',
//               status: 'COMPLETED',
//               amount: {
//                 currency_code: 'USD',
//                 value: '130.00',
//               },
//             },
//           ],
//         },
//       },
//     ],
//     payer: {
//       name: {
//         given_name: 'John',
//         surname: 'Doe',
//       },
//       email_address: 'sb-hucgk23919021@personal.example.com',
//       payer_id: 'SC6U8XM4A7JK6',
//       address: {
//         country_code: 'EG',
//       },
//     },
//   },
// ];

// app.get('/orders', async (req, res) => {
//   const data = orders.find({});
//   res.send(data);
// });

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
