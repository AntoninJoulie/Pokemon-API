const mongoose = require('../db');

const modelRegion = mongoose.model('table_region', {
    number: {
        type: Number
    },
    name: {
        type: String,
    },
    nativeTrainer: {
        type: Array,
    },
    nativePokemon: {
        type: Array
    }
});

module.exports = modelRegion;