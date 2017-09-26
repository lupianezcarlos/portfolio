angular.module('GalleryComponent',[])
   .component('gallery',{
       templateUrl:'./views/gallery.html',
       controller: function ($http, $scope) {
        var $this = this;
        
        $http.get('/api/gallery').then(function (res) {
            $this.galleryData = res.data;
        });
      }
   })