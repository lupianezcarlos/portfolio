angular.module('CrudModule',[])

    .controller('CreateController', function($scope, FileUploader) {
        $scope.uploader = new FileUploader({
            url:'uploads'
        });
    })