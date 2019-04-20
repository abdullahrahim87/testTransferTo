const express = require('express');
const router = express.Router();

const middleWare = require('../middleware/index.js');
const calculatorController = require('../controllers/CalculatorController');

router.get('/', function(req, res, next) {
  res.send('respond with a resourcesss');
});

router.post('/add',middleWare, calculatorController.addAction);

router.post('/subtract',middleWare, calculatorController.subtractAction);

router.post('/multiply', middleWare, calculatorController.multiplyAction);

router.post('/divide', middleWare, calculatorController.divideAction);

router.post('/sqrt',middleWare, calculatorController.sqrtAction);

router.post('/qrt',middleWare,calculatorController.qrtAction);

router.post('/pow', middleWare, calculatorController.powerAction);

router.post('/factorials',middleWare, calculatorController.factorialsAction);


module.exports = router;