'use strict';

var app = angular.module('explore4sqApp', [
  'ngResource',
  'ngRoute',
  'ngCookies',
    'ui.bootstrap',
    'chieffancypants.loadingBar',
    'ngAnimate'
]);

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
        .when('/explore', {
            templateUrl: 'partials/placesresults.html',
            controller: 'placesExplorerController'
      })
        .when('/myplaces', {
            templateUrl: 'partials/myplaces.html',
            controller: 'myPlacesController',
            authenticate: false
        })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/explore'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });