const express = require('express');
const router = express.Router();


const statsController = require('../controllers/StatsController');

router.get('/', statsController.getStatsAction);



module.exports = router;