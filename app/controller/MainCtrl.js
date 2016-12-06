myApp.controller('MainCtrl', function($scope,$location){
  var vm = this;
  vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };

});
