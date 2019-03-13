const mongoose = require('../db');

const modelTrainer = mongoose.model('table_trainer', {
    number: {
        type: Number
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    job: {
        type: String
    },
    pokemon: {
        type: Array
    },
    region: {
        type: Number
    }
});

module.exports = modelTrainer;