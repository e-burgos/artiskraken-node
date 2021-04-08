const express = require('express');
const router = express.Router();
const categoriesController = require("../../controllers/api/categoriesController");

/* GET all categories */
router.get("/", categoriesController.findAll);

/* GET one categories in table list */
router.get("/list", categoriesController.tableList);

/* GET one categories in table list */
router.post("/edit-category/:id", categoriesController.update);

/* GET all categories por type */
router.get("/types/:id", categoriesController.filterType);

/* GET all category */
router.get("/:id", categoriesController.findOne);

module.exports = router;