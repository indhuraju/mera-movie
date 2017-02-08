var express =require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));



var mappingSchema = mongoose.Schema({
  mappingMoviename:String,
  mappingTheaterlocation:String,
  mappingTheatername:String,
  mappingShowtiming:Array,
  mappingFromdate:String,
  mappingTodate:String,
  mappingTicketprice:String
});

var Mapping = mongoose.model('Mapping', mappingSchema, 'mappingtable');

router.get('/map', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Mapping.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/map/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Mapping.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/map', function(req, res){
  console.log(req.body);
  var name = req.body.mappingMoviename;
  var thloc = req.body.mappingTheaterlocation;
  var thname = req.body.mappingTheatername;
  var showtiming = req.body.mappingShowtiming;
  var fromdate = req.body.mappingFromdate;
  var todate = req.body.mappingTodate;
  var tkprice = req.body.mappingTicketprice
  var mapping1 = new Mapping({
    Moviename: name,
    Theaterlocation:thloc,
    Theatername:thname,
    Showtiming:showtiming,
    Fromdate:fromdate,
    Todate:todate,
    Ticketprice:tkprice
  });

  mapping1.save(function(err, docs){
    console.log("Mapping Saved Successfully");
    if ( err ) throw err;
    res.json(docs);
  });

  })
router.delete('/map/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Mapping.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.put('/map/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Mapping.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
