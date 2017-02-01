
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

// var movieSchema = mongoose.Schema({
//   movieID: String,
//   movieName: String
//  });

var theaterSchema = mongoose.Schema({
  theaterID:Number,
  theaterName: String,
  theaterLocation: String,
  theaterScreen: Number
 });
// var Movie = mongoose.model('Movie', movieSchema, 'movietable');

var theater = mongoose.model('theater', theaterSchema, 'theatertable');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


router.get('/th', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    theater.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/th/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     theater.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/th', function(req, res){
  console.log(req.body);
  var id = req.body.theaterID;
  var name = req.body.theaterName;
  var loc = req.body.theaterLocation;
  var scrn = req.body.theaterScreen;

  var theaterinfo = new theater({
    theaterID: id,
    theaterName :name,
    theaterLocation: loc,
    theaterScreen :scrn
  });

  theaterinfo.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/th/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      theater.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/th/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    theater.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
