(function(){
  'use strict';

  angular.module('GeneralControllers',[])
  .controller('NavController',function($scope,$location) {
        this.$location = $location;

        $scope.$on('$routeChangeStart', function(next, current) { 
          // console.log($location.path())
        });
  })

  .controller('ContactController',function($http, $scope, $timeout) {
    
      $scope.error = false;
      $scope.valid = false;

      $scope.sendEmailDetails = function(isValid) {
           var user = $scope.user;
        if(isValid) {
                $http.post('/api/contact/email', user)
                .then(
                  function(response){
                    // success callback
                    if(response.data.status == 'ok') {
                      $scope.valid = true;
                      $scope.user = {};
                    } 
                  }, 
                  function(response){
                    // failure callback
                    console.log('error' + response);
                  }
               );
          } else  {
              $scope.error = true;
              $scope.valid = false;
              $timeout(function() {
                $scope.error = false;
              }, 4000)
          }
          
      }
    
  })
  
})()



