angular.module('quoteBook').controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService){
  $scope.data = dataService.getData();
  $scope.add = function(obj){
    dataService.addData(obj);
    $scope.quote="";
    $scope.author="";
    $scope.addForm = !$scope.addForm;
  };
  $scope.remove = function(str){
    dataService.removeData(str);
    $scope.search="";
    $scope.searchForm = !$scope.searchForm;
  };

}]);
