const express = require('express');
const router = express.Router();
const busController = require('../controllers/busControllers');

router.get('/', busController.getAllBuses);
router.get('/:id', busController.getBusById);
router.post('/buses', busController.addBus);
router.put('/buses/:id', busController.updateBus);
router.delete('/buses/:id', busController.deleteBus);

module.exports = router;