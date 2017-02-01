
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

var locSchema = mongoose.Schema({
  locID:Number,
  locName:String,
 });
// var Movie = mongoose.model('Movie', movieSchema, 'movietable');

var loc = mongoose.model('loc', locSchema, 'loctable');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


router.get('/lo', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    loc.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/lo/:id', function (req, res) {
    console.log("REACHED GET ID ON SERVER");
     loc.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/lo', function(req, res){
  console.log(req.body);
  var id = req.body.locID;
  var name = req.body.locName;

  var locinfo = new loc({
    locID: id,
    locName :name,
  });

  locinfo.save(function(err, docs){
    if ( err ) throw err;
    console.log("location is added  Successfully");
    res.json(docs);
  });

  })

router.delete('/lo/:id', function(req, res){
   console.log("location is deleted Successfully");
      loc.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/lo/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    loc.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
