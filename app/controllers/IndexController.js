(function () {

    angular.module('IndexController', [])
        .controller('IndexCtrl', function ($scope, $http) {
            $this = this;

            $http.get('/data').then(function (res) {

                $this.name = res.data;
                console.log(data)

            })


        })
})()