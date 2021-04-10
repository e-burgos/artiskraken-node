const express = require('express');
const router = express.Router();
const usersController = require("../../controllers/api/usersController");

/* GET products */
router.get("/", usersController.findAll);

/* GET products Qty */
router.get("/count", usersController.userCount);

/* GET shops in table list */
router.get("/list", usersController.tableList);

/* GET one product */
router.get("/:id", usersController.findOne);

module.exports = router;