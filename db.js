const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@cluster0-zd8v6.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    }).then(() => {
    console.log('Successful connection to mongodb');
}).catch(() => {
    console.log('Failed to connect mongodb');
})

module.exports = mongoose;