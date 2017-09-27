(function(){
  // 'use strict';

  angular.module('GeneralControllers',[])
  .controller('NavController',function($scope,$location) {
        this.$location = $location;

        $scope.$on('$routeChangeStart', function(next, current) { 
          // console.log($location.path())
        });
  })

  .controller('ContactController',function($http, $scope) {
    
      $scope.error = false;

      $scope.sendEmailDetails = function(isValid) {
        if(isValid) {
         $http.post('/api/contact/email',$scope.user).then(
              function(data){
                $scope.error = false;
                $scope.user = {};
              },function(err) {
                console.log('err ' + err)
              });
        } else  {
            $scope.error = true;
        }
      }
    
  })
  
})()