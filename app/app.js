angular.module('Myapp',[
  'ngRoute',
  'IndexController',
  'GalleryController',
  'GeneralControllers',
  'CustomDirectives',
  // 'ngAnimate',
  'ui.router',
  'GalleryComponent',
  'angularFileUpload',
  'CrudModule',
  'AuthModule'
])
   
.config(function(
  // $routeProvider, 
  $locationProvider,
   $stateProvider
  ) {
   
  $stateProvider.state('base',{
    abstract: true,
    url:'/',
    views: {
       '':{templateUrl:'./views/base.html'},
       'section1@base':{templateUrl:'./views/section1.html'},
       'section2@base':{templateUrl:'./views/section2.html'}
    }
    
  })
  .state('base.gallery',{
      url:'',
      component:'gallery'
  })
  .state('base.contact',{
    url:'/contact',
    templateUrl:'./views/contact.html',
    controller: 'ContactController'
  });

  $stateProvider.state({
    name:'login',
    url:'/auth',
    controller:'LoginController',
    templateUrl:'./views/auth/login.html',
  });

  $stateProvider.state({
    name:'create',
    url:'/website/create',
    templateUrl:'./views/create.html',
  })

  $locationProvider.html5Mode({enabled:true});
});