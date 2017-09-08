angular.module('Myapp',[
  'ngRoute',
  'IndexController',
  'GalleryController',
  'GeneralControllers',
  'CustomDirectives',
  // 'ngAnimate',
  'ui.router',
  'GalleryComponent'
])
   
.config(function(
  // $routeProvider, 
  $locationProvider,
   $stateProvider
  ) {
  // .when('/contact',{
  //   templateUrl:'./views/contact.html'
    // ,
    // controller: "ContactCtrl"
  // })
  $stateProvider.state('base',{
    abstract: true,
    url:'/',
    views: {
       '':{templateUrl:'./views/base.html'},
       'section1@base':{templateUrl:'./views/section1.html'},
       'section2@base':{templateUrl:'./views/section2.html'},
      //  'section3@base':{component:'gallery'}
    }
    
  })
  .state('base.gallery',{
      url:'',
      component:'gallery'
  })
  .state('base.contact',{
    url:'/contact',
    templateUrl:'./views/contact.html',
  })


  $stateProvider.state({
    name:'create',
    url:'/website/create',
    templateUrl:'./views/create.html',
  })
});