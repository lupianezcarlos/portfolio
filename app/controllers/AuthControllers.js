angular.module('AuthModule',[])
    .controller('LoginController',function($scope,$http){
           $scope.send = function(isValid) {
             if(isValid) {
                $http.post('http://localhost:3000/auth',$scope.user).then(function(data) {
                        //  send(data)
                        //  $scope.user = {};
                        console.log('done');
                },function(err){
                    console.log(err)
                })
                
             }
           }
    })