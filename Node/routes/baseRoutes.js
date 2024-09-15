// baseRoutes.js
const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseControllers');

// Define the routes
router.get('/', baseController.getAllBases);           // Get all bases
router.get('/bases/:id', baseController.getBaseById);       // Get a base by ID
router.post('/bases', baseController.addBase);              // Add a new base
router.put('/bases/:id', baseController.updateBase);        // Update a base by ID
router.delete('/bases/:id', baseController.deleteBase);     // Delete a base by ID

module.exports = router;