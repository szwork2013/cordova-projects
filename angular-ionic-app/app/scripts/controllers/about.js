'use strict';

/**
 * @ngdoc function
 * @name angularIonicAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularIonicAppApp
 */
angular.module('angularIonicAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
