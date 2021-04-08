let axios = require('axios');
let defaults = require("./default");

const url = 'beers/'

let beerResource = {
    allBeers: function(){
        return axios({
            ...defaults,
            method: "GET",
            url: url,
            params: {
                key: '3df6b38d0b512e1ef1a1ef7891647999'
            }
        })
    }
}

module.exports = beerResource;

