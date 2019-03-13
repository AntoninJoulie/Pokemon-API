const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pkmnapi', { useNewUrlParser: true });

module.exports = mongoose;