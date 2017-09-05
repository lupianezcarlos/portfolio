(function () {
    angular.module('GalleryController', [])

        .controller('GalCtrl', function ($http, $scope) {
            var $this = this;
            
            $http.get('/gallery').then(function (res) {
                $this.galleryData = res.data;
            });
        
        })
})()