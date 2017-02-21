'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.m = $rootScope.bookedMovie;
console.log(  $scope.m);


var refreshrev = function () {
      $http.get('/re/re').success(function (response) {
          $scope.reviewlist = response;
          $scope.review = "";
      });
  };

  refreshrev();

$scope.addrev = function () {

    $scope.review.movieName=$scope.m.movieTitle;
    console.log($scope.review);
    $http.post('/re/re', $scope.review).success(function (response) {
        console.log(response);
        console.log("Rating IS SUCCESSFUL");
        refreshrev();
    });
};

// var sum=0;
// for (var i=0; i<5; i++)
// {
//     sum += this.getField("Rating." + i).value;
// }
// event.value = sum / 5;


function setRating(value, doCallback) {
      if (value && value < 0 || value > maxRating) { return; }
      if (doCallback === undefined) { doCallback = true; }

      currentRating = value || currentRating;

      iterate(stars, function(star, index) {
        if (index < currentRating) {
          star.classList.add('is-active');
        } else {
          star.classList.remove('is-active');
        }
      });

      if (callback && doCallback) { callback(getRating()); }
    }

};
