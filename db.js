const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pkmnapi', { useNewUrlParser: true }).then(() => {
    console.log('Successful connection to mongodb');
}).catch(() => {
    console.log('Failed to connect mongodb');
})

module.exports = mongoose;