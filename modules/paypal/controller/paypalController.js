const Paypal = require('../model/paypalModel');

const getAllPayPalDetails = async (req, res) => {
  try {
    const data = await Paypal.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewPayPalDetails = async (req, res) => {
  const { id_paypal, status, purchase_units, payer } = req.body;
  try {
    const newDetails = new Paypal({
      id_paypal,
      status,
      purchase_units,
      payer,
    });
    const data = await newDetails.save();
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

module.exports = {
  getAllPayPalDetails,
  addNewPayPalDetails,
};
