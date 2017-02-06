
'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {
        $http.get('/sh/sh').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.showtimelist = response;
            $scope.showtime = "";
        });
    };

    refresh();

    $scope.addShow = function () {
        console.log($scope.showtime);
        $http.post('/sh/sh', $scope.showtime).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeShow = function (id) {
        console.log(id);
        $http.delete('/sh/sh/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editShow = function (id) {
         $http.get('/sh/sh/' + id._id).success(function (response) {
            $scope.showtime = response[0];
        });
    };

    $scope.updateShow = function () {
        console.log("REACHED UPDATE");
        console.log($scope.showtime._id);
        $http.put('/sh/sh/' + $scope.showtime._id, $scope.showtime).success(function (response) {
            console.log(response);
            refresh();
        })
    }
    // 'use strict';
    //
    // module.exports = function($scope, $http) {
    //   console.log("ctrller is working");
    //
    //
    //   $(function(){
    //   $('a[title]').tooltip();
    //   });
    // };

    // 'use strict';
    //
    // module.exports = function($scope, $http) {
    //

      var refreshcity = function () {
            $http.get('/c/c').success(function (response) {
                console.log('READ IS SUCCESSFUL');
                $scope.citieslist = response;
                $scope.cities = "";
            });
        };

        refreshcity();

        $scope.add = function () {
            console.log($scope.cities);
            $http.post('/c/c', $scope.cities).success(function (response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refreshcity();
            });
        };

        $scope.remove = function (id) {
            console.log(id);
            $http.delete('/c/c/' + id._id).success(function (response) {
                console.log(response);
                console.log('DELETED SUCCESSFULLY');
                refreshcity();
            });
        };

        $scope.edit = function (id) {
             $http.get('/c/c/' + id._id).success(function (response) {
                $scope.cities = response[0];
            });
        };

        $scope.update = function () {
            console.log("REACHED UPDATE");
            console.log($scope.cities._id);
            $http.put('/c/c/' + $scope.cities._id, $scope.cities).success(function (response) {
                console.log(response);
                refreshcity();
            })
        }
    };

// };



// 'use strict';
//
// module.exports = function($scope, TodoService) {
//   $(document).ready(function()
//   {
//       var navItems = $('.admin-menu li > a');
//       var navListItems = $('.admin-menu li');
//       var allWells = $('.admin-content');
//       var allWellsExceptFirst = $('.admin-content:not(:first)');
//
//       allWellsExceptFirst.hide();
//       navItems.click(function(e)
//       {
//           e.preventDefault();
//           navListItems.removeClass('active');
//           $(this).closest('li').addClass('active');
//
//           allWells.hide();
//           var target = $(this).attr('data-target-id');
//           $('#' + target).show();
//       });
//   });
// };
