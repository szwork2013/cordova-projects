'use strict';

/**
 * @ngdoc overview
 * @name angularIonicAppApp
 * @description
 * # angularIonicAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularIonicAppApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
