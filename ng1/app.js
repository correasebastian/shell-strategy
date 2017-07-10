'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');
   $locationProvider.html5Mode(true);
  // $locationProvider.config

  $routeProvider
  // .otherwise({redirectTo: '/view1'});
  .otherwise({template : ''});
}]);
