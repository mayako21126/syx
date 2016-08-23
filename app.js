var express = require('express');
var app = express();
var path = require('path');
var mongoose = require("mongoose");
var qiniu = require('qiniu');
var bodyParser = require('body-parser');
var config = require( './common/config' );
var morgan = require("morgan");



global.dbHelper = require( './common/dbHelper' );

global.db = mongoose.connect("mongodb://127.0.0.1:27017");

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));


// 设定view engine变量，意为网页模板引擎
//app.set('view engine', 'ejs');
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

//CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');
    next();
});

//app.use(function(req, res, next) {
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');
//    next();
//});

// 设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

app.get('/', function(req, res) {
    res.render('index');
});

module.exports = app;

// app.listen(3000);


