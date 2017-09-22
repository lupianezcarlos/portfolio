angular.module('myApp',[
    "ui.router"
])
   .config(function($stateProvider) {
     
    $stateProvider.state({
        name: 'main',
        url: '/',
        templateUrl: './view.html'
    })



   });