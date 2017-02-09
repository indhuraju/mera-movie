'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';


var refresh = function() {
$http.get('/movie/movie').success(function(response) {
console.log('READ IS SUCCESSFUL');
$scope.moviList = response;
$scope.mov = "";
});
};

refresh();
}
