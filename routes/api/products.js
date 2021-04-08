const express = require('express');
const router = express.Router();
const productsController = require("../../controllers/api/productsController");

/* GET products */
router.get('/', productsController.findAll);

/* GET products Qty */
router.get('/count', productsController.productCount);

/* GET last product */
router.get('/last', productsController.findLast);

/* GET one product */
router.get('/:id', productsController.findOne);

module.exports = router;