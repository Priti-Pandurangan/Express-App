var express = require('express')
var app = express()

app.get('/', function(request,response) {
	response.send('Hello World! Priti is great')
});

app.listen(3000,function () {
	console.log('Example app listening to port 3000!')
});