
var logger = require('morgan');
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var path=require('path');


var mongo = require('mongodb');
var mongoose = require('mongoose');

var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

var routes = require('./routes/movie-crud');
var addtheatre=require('./routes/theatre');
var addshow=require('./routes/showtime');
var addcity=require('./routes/city-crud');
var addmapping=require('./routes/mapping');
var addbook=require('./routes/book-crud');
// var addloc=require('./routers/location-crud');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(cookieParser());
app.use(express.static(__dirname + '/public'));


app.use('/movie', routes);
app.use('/t', addtheatre);
app.use('/sh',addshow);
app.use('/c',addcity);
app.use('/map',addmapping);
app.use('/b',addbook);



app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname, '../client', 'index.html'));
});



// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err,req,res){
  res.status(err.status || 500);
  res.end(JSON,stringfy({
    message:err.message,
    error:{}
}));
});


var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
