const express = require('express');
const router = express.Router();
const usersController = require("../../controllers/api/usersController");

/* GET products */
router.get("/", usersController.findAll);

/* GET products Qty */
router.get("/count", usersController.userCount);

/* GET one product */
router.get("/:id", usersController.findOne);

module.exports = router;