module.exports = mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@cluster0-zd8v6.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    }).then(() => {
    console.log('\x1b[32m%s\x1b[0m', 'Successful connection to mongodb 👌');
}).catch(() => {
    console.log('\x1b[31m%s\x1b[0m', 'Failed to connect mongodb  ⚠');
});