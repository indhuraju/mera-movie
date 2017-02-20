var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var reviewSchema = mongoose.Schema({
  MovieName: String,
  Email: String,
  FirstRating: Number,
  SecondRating: Number,
  ThirdRating: Number,
  FourthRating: Number,
  FifthRating: Number,
  comment: String,
  avg: String
 });
var Review = mongoose.model('Review',reviewSchema, 'reviewtable');


router.get('/re', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Review.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/re/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Review.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/re', function(req, res){
  console.log(req.body);
  var name = req.body.MovieName;
  var em = req.body.Email;
  var frst = req.body.FirstRating;
  var snd = req.body.SecondRating;
  var thrd = req.body.ThirdRating;
  var furt = req.body.FourthRating;
  var fift = req.body.FifthRating;
  var cmt = req.body.comment;
  var ags = req.body.avg
var review1 = new Review({
    MovieName : name,
    Email: em,
    FirstRating: frst,
    SecondRating: snd,
    ThirdRating: thrd,
    FourthRating: furth,
    FifthRating: fift,
    comment: cmt,
    avg: ags
});

  review1.save(function(err, docs){
    if ( err ) throw err;
    console.log("Rating Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/re/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Review.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/re/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  Review.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
