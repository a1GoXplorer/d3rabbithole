var express = require('express');
var ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
	res.render('sandbox');
});

app.get('/manualgraph', function (req, res) {
	res.render('manualgraph');

});


app.listen(3000, function () {
	console.log("Listening");
});