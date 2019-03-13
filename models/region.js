const mongoose = require('../db');

const modelRegion = mongoose.model('table_region', {
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