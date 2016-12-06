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

myApp.directive('onlyDigits', function () {
   return {
       restrict: 'A',
       require: '?ngModel',
       link: function (scope, element, attrs, modelCtrl) {
           modelCtrl.$parsers.push(function (inputValue) {
               if (inputValue == undefined) return '';
               var transformedInput = inputValue.replace(/[^0-9]/g, '');
               if (transformedInput !== inputValue) {
                   modelCtrl.$setViewValue(transformedInput);
                   modelCtrl.$render();
               }
               return transformedInput;
           });
       }
   };
});
