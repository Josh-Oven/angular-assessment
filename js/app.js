angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){


  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../views/home.html',
    controller: ''
  })
  .state('about', {
    url: '/about',
    templateUrl: '../views/about.html',
    controller: ''
  })
  .state('blog', {
    url: '/blog',
    templateUrl: '../views/blog.html',
    controller: ''
  })
  .state('shop', {
    url: '/shop',
    templateUrl: '../views/shop.html',
    controller: 'shopCtrl'
  })
  .state('details', {
    url: '/details/:id',
    templateUrl: '../views/shop.html',
    controller: ''
  })
  $urlRouterProvider.otherwise('/');

})
