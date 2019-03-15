const mongoose = require('../db');

const modelPokemon = mongoose.model('table_pokemon', {
    number: {
        type: Number
    },
    name: {
        type: String
    },
    type: {
        type: Array
    },
    trainer: {
        type: Array
    },
    region: {
        type: Array
    }
});

module.exports = modelPokemon;