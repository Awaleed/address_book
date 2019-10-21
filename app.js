var express = require('express');
var mogoose = require('mongoose')

var phoneBookApiRoute = require('./routes/phone-book-api');

var app = express();

// DB setup
mogoose.connect('mongodb://admin:awmk1234@ds237588.mlab.com:37588/phone-book', { useNewUrlParser: true, useUnifiedTopology: true })
var db = mogoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database connected'))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/phone-book', phoneBookApiRoute);


app.listen(process.env.PORT);
