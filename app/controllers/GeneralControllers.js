(function(){
  'use strict';

  angular.module('GeneralControllers',[])
  .controller('NavController',function($scope,$location) {
        this.$location = $location;

        $scope.$on('$routeChangeStart', function(next, current) { 
          // console.log($location.path())
        });
  })
  
})()