const {
  getAllPayPalDetails,
  addNewPayPalDetails,
} = require('../controller/paypalController');

const router = require('express').Router();

router.get('/getPaypalDetails', getAllPayPalDetails);
router.post('/paypalDetails', addNewPayPalDetails);

module.exports = router;
