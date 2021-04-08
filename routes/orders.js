const express = require('express');
const ordersController = require('../controllers/ordersController')
const router = express.Router();
const {check,validationResult, body}= require("express-validator");

/* GET order details page. */
router.get('/:id/orderDetails', ordersController.getOrderDetails);

/* GET order success page. */
router.get('/:id/orderSuccess', ordersController.getOrderSuccess);

/* GET order pending page. */
router.get("/:id/orderPending", ordersController.getOrderPending);

/* GET order failure page. */
router.get('/:id/orderFailure', ordersController.getOrderFailure);

module.exports = router;