angular.module('Myapp',[
  'ngRoute',
  'IndexController',
  'CustomDirectives'
])
   
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/carlos', {
    templateUrl: './views/app.html',
    // controller: 'IndexCtrl'
    
    
  })
});