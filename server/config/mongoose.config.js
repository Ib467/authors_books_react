const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});