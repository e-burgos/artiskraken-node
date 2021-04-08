const express = require('express');
const router = express.Router();
const breweryDBController = require("../../controllers/api/breweryDBController")


/* GET all beers breweryDB API. */
router.get('/beers', breweryDBController.allBeers);

module.exports = router;