const mongoose = require('../db');

const modelPokemon = mongoose.model('table_pokemon', {
    number: {
        type: Number
    },
    name: {
        type: String
    },
    type: {
        type: String
    },
    trainer: {
        type: String
    },
    region: {
        type: Number
    }
});

module.exports = modelPokemon;