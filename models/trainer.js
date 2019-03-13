const mongoose = require('../db');

const modelTrainer = mongoose.model('table_trainer', {
    id: {
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

    },
    region: {
        type: Number
    }
});

module.exports = modelTrainer;