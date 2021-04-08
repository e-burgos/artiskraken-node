// Require
let beerResource = require("../../requests/beerResource");

// Controller
const breweryDBController = {

    allBeers: async (req,res) => {
        try {
            let beers = await beerResource.allBeers();
            res.json(beers.data.data);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = breweryDBController;