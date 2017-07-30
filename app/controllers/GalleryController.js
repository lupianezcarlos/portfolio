(function () {
    angular.module('GalleryController', [])

        .controller('GalCtrl', function ($http, $scope) {
            console.log('carlitos')
            var $this = this;
            $http.get('/gallery').then(function (res) {
                $this.gal = res.data;
            })
        })
})()