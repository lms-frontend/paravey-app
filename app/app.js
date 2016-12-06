var myApp = angular.module('paraveyApp', ['ngRoute']);

myApp.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider) {
    //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $routeProvider
      .when('/', {
            templateUrl: 'assets/views/login.html',
            controller: 'LoginCtrl as login',
      })
      .when('/register', {
          templateUrl: 'assets/views/register.html',
 	        controller : 'RegisterCtrl as register'
      })
      .otherwise({
            redirectTo: '/'
      });

      // $locationProvider.html5Mode(true);
}]);
