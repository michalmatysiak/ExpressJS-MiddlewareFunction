var express = require('express');
var app = express();

app.use('/store', function(req,res,next) {
	console.log('Jestem pośrednikiem przy żądaniu do /store');
	next();
});

app.get('/', function(req,res) {
	res.send('Hello World');
});

app.get('/store', function(req,res) {
	res.send('To jest sklep !!!');
});

app.listen(3000);
app.use(function(req,res,next) {
	res.status(404).send('Wybacz, nie mogliśmy odnależć tego, czego szukałeś! ')
});