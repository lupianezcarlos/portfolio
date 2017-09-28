(function () {

    angular.module('IndexController', [])
        .controller('IndexCtrl', function ($scope, $http) {
            $this = this;

            $http.get('/').then(function (res) {

                $this.name = res.data;
                console.log(data)

            })


        })
})()