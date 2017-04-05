angular.module('app').controller('shopCtrl', function($scope, shopService){

$scope.products = [];

$scope.recieveData = function(){
  shopService.getData().then(function(response){
    $scope.products = response.data;
    console.log('workkkkkkk');
  })
}

$scope.recieveData();

})
