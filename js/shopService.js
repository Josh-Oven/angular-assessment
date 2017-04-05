angular.module('app').service('shopService', function($http){

this.getData = function(){
  return $http.get('http://practiceapi.devmounta.in/products').then(function(response){
    return response;
  })
}
console.log('fa;lskdjf;alkdjf;asdfjk')


})
