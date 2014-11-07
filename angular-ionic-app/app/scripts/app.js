'use strict';

/**
 * @ngdoc overview
 * @name angularIonicAppApp
 * @description
 * # angularIonicAppApp
 *
 * Main module of the application.
 */
angular.module('angularIonicAppApp', ['ngRoute','ngCordova','ngTouch'])
.config(function($routeProvider) {
    console.log('ROUTEPROVIDER');
    $routeProvider.when('/', {
        templateUrl : 'views/main.html',
        controller : 'MainCtrl'
    }).when('/about', {
        templateUrl : 'views/about.html',
        controller : 'AboutCtrl'
    }).otherwise({
        redirectTo : '/'
    });
});

var CordovaInit = function() {

    if (window.cordova) {
        document.addEventListener('deviceready', function() {
            console.log('Arranco angular desde cordova');
            boot();
        });
    } else {
        console.log('Arranco angular desde web');
        boot();
    }
    
    function boot(){
        angular.bootstrap(document, [ 'angularIonicAppApp' ]);
    }
};

angular.element(document).ready(function() {
    new CordovaInit();
});

