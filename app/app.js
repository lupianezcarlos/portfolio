angular.module('Myapp',[
  'ngRoute',
  'IndexController',
  'GalleryController',
  'GeneralControllers',
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
    templateUrl:'./views/gallery.html',
    controller: "GalCtrl"
  })
  .when('/contact',{
    templateUrl:'./views/contact.html'
    // ,
    // controller: "ContactCtrl"
  })
});