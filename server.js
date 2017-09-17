var express =require("express");
var app =express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var config = require('./server/config/config');
app.use(express.static('client',{index:'views/index.html'}));
var router = require('./server/routes/router.js');
app.use('/api',router); 

app.listen(config.port);


