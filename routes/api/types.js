const express = require('express');
const router = express.Router();
const typesController = require("../../controllers/api/typesController");

/* GET all types */
router.get("/", typesController.findAll);

/* GET all types */
router.get("/:id", typesController.findOne);

module.exports = router;