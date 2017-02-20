
'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.m = $rootScope.addconfirm;
console.log(  $scope.m);



  function addsub(m){
              alert(" Your Rating is confirmed");
            }




};





  // var refreshbok = function () {
  //       $http.get('/b/b').success(function (response) {
  //           // console.log('READ THEATRE SUCCESSFUL');
  //           $scope.booklist = response;
  //           $scope.book = "";
  //       });
  //   };
  //
  //   refreshbok();
  //
  //
  //   $scope.addbok = function () {
  //       $scope.book.MovieName=$scope.m.movieTitle;
  //       $scope.book.seatnumbers=selected;
  //       console.log($scope.book);
  //       $http.post('/b/b', $scope.book).success(function (response) {
  //           console.log(response);
  //           console.log("CREATE BOOKING IS SUCCESSFUL");
  //           refreshbok();
  //       });
  //   };
