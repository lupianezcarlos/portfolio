(function(){
  // 'use strict';

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
        if(isValid) {
          $http.post('/api/contact/email',$scope.user).then(
                function(data){
                    $scope.error = false;
                    $scope.valid = true;
                },function(err) {
                  console.log('err ' + err)
                });
          } else  {
              $scope.error = true;
              $timeout(function() {
                $scope.error = false;
              }, 4000)
          }
          $scope.user = {};
      }
    
  })
  
})()

