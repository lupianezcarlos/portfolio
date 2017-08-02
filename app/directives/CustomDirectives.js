angular.module('CustomDirectives', [])

    .directive('blocks', function ($window) {
        return {
            restrict: "AE",
            link: function (scope, element, attrs) {
                function init() {
                    if ($window.innerWidth > 992) {
                        element.find('.col-lg-4:not(.middle)').css('margin-top', element.find('.middle .textbox').innerHeight());
                    } else {
                        element.find('.col-lg-4:not(.middle)').removeAttr('style');
                    }
                }
                init();

                angular.element($window).resize(function () {
                    init();
                });

            }
        }
    })


    .directive('cubeStyle', function ($window, $document) {
        return {
            restrict: "AE",
            link: function (scope, element, attrs) {
                function init() {
                    var $cube = element.find('.cube');
                    var cubeHeight = $cube.innerWidth();
                    $cube.height(cubeHeight);
                }
                init();
                angular.element($window).resize(function () {
                    init();
                })

            }
        }
    })

    .directive('slide',function($interval, $timeout)  {
        return {
         restrict:"AE",
        //  scope: {
        //      galleryCrtl : '='
        //  },
         link: function(scope, element, attrs){
          scope.current = 0;
          scope.next =  function () {
              
                $timeout(function() {
                 
                scope.current++;
                 },1000)
      
            }

             scope.$watch('current',function() {
                 scope.gallery.images.forEach(function(image) {
                      image.visible = false;
                 });
                     scope.gallery.images[scope.current].visible = true;

             })
                
         }
        }
     
    })