'use strict';

angular.module('explore4sqApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
