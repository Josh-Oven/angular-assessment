angular.module('app').directive('logo', function(){
  return {
    restrict: 'E',
    templateUrl: '../view/logo.html',
    link: function(scope, element, attributes){
      element.css('position', 'absolute')
    }
  }
})
