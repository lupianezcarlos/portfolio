angular.module('Myapp',[
  'ngRoute',
  'IndexController',
  'GalleryController',
  'CustomDirectives',
  'ngAnimate'
])
   
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/carlos', {
    templateUrl: './views/app.html',
    // controller: 'IndexCtrl'
  })
  .when('/',{
    // templateUrl:'./views/gallery.html',
    controller: "GalCtrl"
  })
});