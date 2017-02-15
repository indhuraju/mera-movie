'use strict';

module.exports = function($scope, $http, $rootScope,$location) {
// $scope.booking = 'booking';
  var refresh = function() {
  $http.get('/movie/movie').success(function(response) {
  console.log('READ IS SUCCESSFUL');
  $scope.moviList = response;
  $scope.mov = "";
  });
  };
  refresh();
  $scope.bookTicket= function (m) {
 $rootScope.bookedMovie=m;
  $location.path('/movie');
          };

}
