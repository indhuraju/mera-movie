'use strict';
module.exports = function($scope, $http) {

// module.exports = function($scope, $http, $log, $rootScope) {
//     console.log($scope.r);
//     $scope.r = $rootScope.reviews;


  var refresh = function () {
        $http.get('/re/re').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.reviewlist = response;
            $scope.review = "";

        });
    };

    refresh();

    $scope.addReview = function () {
        console.log($scope.review);
        $http.post('/re/re', $scope.review).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeReview = function (id) {
        console.log(id);
        $http.delete('/re/re/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editReview = function (id) {
         $http.get('/re/re/' + id._id).success(function (response) {
            $scope.review = response[0];
        });
    };

    $scope.updateReview = function () {
        console.log("REACHED UPDATE");
        console.log($scope.review._id);
        $http.put('/re/re/' + $scope.review_id, $scope.review).success(function (response) {
            console.log(response);
            refresh();
        })
    }

  //   $scope.addreview= function (r) {
  //  $rootScope.bookreviews=r;
  //   $location.path('/re');
  //           };
};
