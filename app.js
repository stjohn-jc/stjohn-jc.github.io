/** This file defines the Angular application. */

(function(){
  /**
   * Defines the directive for the page header.
   */
  var header = angular.module('headerDirective', [])
  .directive('stjbHeader', function() {
    return {
      templateUrl: 'components/header/header.html'
    };
  });
  
  /**
   * Defines the module for the app.
   */
  var app = angular.module('stjb', ['ngRoute', 'headerDirective']);
  
  app.config(function($routeProvider) {
    $routeProvider
        /* Home Page */
        .when('/', {
            templateUrl: 'pages/mainpage.html',
        })
        /* Special Events */
        .when('/specialevents', {
            templateUrl: 'pages/specialevents.html',
        })
        /* History */
        .when('/history', {
            templateUrl: 'pages/history.html',
        })
        /* Holy Week */
        .when('/holyweek', {
            templateUrl: 'pages/holyweek.html',
        })
        /* Weekly Bulletin */
        .when('/bulletin', {
            templateUrl: 'pages/bulletin.html',
        })
        ;
  });
})();