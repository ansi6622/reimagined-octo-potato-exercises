angular.module('madlibsapp')
.controller('MadLibsController', ['$scope', 'madservice', function($scope, madservice) {
  $scope.master = madservice.getData();

  $scope.createLibs = function(bitsODataLibs) {
    madservice.changeData(bitsODataLibs)
    // $scope.master = angular.copy(bitsODataLibs);
  };

  $scope.reset = function() {
madservice.reset()  };

  $scope.$watch(function(){
    return madservice.getData();
  }, function (bitsODataLibs){
    console.log(bitsODataLibs);
    $scope.master = bitsODataLibs;
  }, true);

  $scope.reset();
}]);
