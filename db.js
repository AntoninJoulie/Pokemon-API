const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:<password>@cluster0-5hax9.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

module.exports = mongoose;