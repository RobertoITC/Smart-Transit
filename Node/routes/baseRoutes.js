const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseControllers');

router.get('/', baseController.getAllBases);
router.get('/bases/:id', baseController.getBaseById);
router.post('/bases', baseController.addBase);
router.put('/bases/:id', baseController.updateBase);
router.delete('/bases/:id', baseController.deleteBase);

module.exports = router;