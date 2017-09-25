(function () {
    angular.module('GalleryController', [])

        .controller('GalCtrl', function ($http, $scope) {
            var $this = this;
            
            $http.get('/api/gallery').then(function (res) {
                $this.galleryData = res.data;
            },
            function(err) {
                console.log(err)
            });
        
        })
})()