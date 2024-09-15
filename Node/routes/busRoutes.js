// busRoutes.js
const express = require('express');
const router = express.Router();
const busController = require('../controllers/busControllers');

// Define the routes
router.get('/', busController.getAllBuses);           // Get all buses
router.get('/:id', busController.getBusById);        // Get a bus by ID
router.post('/buses', busController.addBus);               // Add a new bus
router.put('/buses/:id', busController.updateBus);         // Update a bus by ID
router.delete('/buses/:id', busController.deleteBus);      // Delete a bus by ID

module.exports = router;