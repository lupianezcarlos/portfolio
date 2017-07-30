(function () {

    angular.module('IndexController', [])
        .controller('IndexCtrl', function ($scope, $http) {
            $this = this;

            $http.get('/calos').then(function (res) {

                $this.name = res.data.ame;

            })

        })
})()