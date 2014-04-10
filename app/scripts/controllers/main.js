'use strict';

angular.module('explore4sqApp')
  .controller('MainCtrl', function ($scope, $http) {
        //$scope.currentUser()
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
