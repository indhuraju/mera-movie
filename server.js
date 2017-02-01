
var logger = require('morgan');
var express = require('express');
var routes = require('./routes/movie-crud');
var addtheater=require('./routes/theater');
var addshow=require('./routes/showtiming');
var addlocation=require('./routes/location');
var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie', routes);
app.use('/th',addtheater);
app.use('/sh',addshow);
app.use('/lo',addlocation);

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



var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
