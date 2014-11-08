// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('people', {
    url: '/people',
    controller: 'PeopleCtrl',
    templateUrl: 'templates/people.html'
    })
  .state('person', {
    url: '/person/:index',
    controller: 'PersonCtrl',
    templateUrl: 'templates/person.html',
    resolve: {
      person: function($stateParams, people){
        return people.ready.then(function(){
          return people.list[+$stateParams.index];
        });
      }
    }
  });

  $urlRouterProvider.otherwise('/people');

})

.controller('PeopleCtrl', function($scope, people, $ionicLoading, $ionicPlatform, $cordovaDevice){
  $scope.people = people.list;

  $scope.addPerson = function(){
    people.add().then(function(){
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $ionicLoading.show({
      template: 'Cargando...'
  });

  people.ready.then(function(){
    $ionicLoading.hide();
  });

    $ionicPlatform.ready(function(){
       $scope.uuid = $cordovaDevice.getUUID(); 
    });

}) 

.factory('people', function($http, $q){
  var people = {};
  var n = 0;

  people.list = [];

  people.add = function(){
    return $http.get('http://api.randomuser.me?q=' + (n++))
    .then(function(response){
      people.list.push(response.data.results[0].user);
    });
  };

  people.ready = $q.all([
    people.add(),
    people.add(),
    people.add()
    ]);

  return people;
})

.controller('PersonCtrl', function($scope, person, people, $ionicActionSheet){
  $scope.person = person;

  $scope.deletePerson = function(){
      $ionicActionSheet.show({
        destructiveText: 'Delete ' + person.name.first,
        cancelText: 'Cancel',
        destructiveButtonClicked: function(){
          people.list.splice(people.list.indexOf(person), 1);
          window.history.back();
        }
      });
  };

});


