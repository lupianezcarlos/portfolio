angular.module('CustomDirectives',[])

.directive('blocksDirective', function($window) {
      return {
          restrict:"AE",
          link : function( scope, element, attrs) {
            function init() {
            if($window.innerWidth > 992) {
                        element.find('.col-lg-4:not(.middle)').css('margin-top', element.find('.middle .textbox').innerHeight());
                } else {
                        element.find('.col-lg-4:not(.middle)').removeAttr('style');
                }
            }
          init();

           angular.element($window).resize(function() {
              init();
           });

          }
      }
})