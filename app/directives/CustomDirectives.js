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

    .directive('slide', function ($interval, $timeout) {
        return {
         restrict:"AE",
        //  scope: {
        //      galleryCrtl : '='
        //  },
         link: function(scope, element, attrs){
          scope.index = 0;
          var timer;

          scope.start =  function (index) {
         
                    scope.index = index;
                    if(element.find('.gal-img').hasClass(index)) {
                        scope.gallery.images[index].visible = true;
                    }
                 }
                 
            scope.reset = function() {
                $timeout.cancel(timer)
            }
            

             scope.$watch('index',function() {
                 scope.gallery.images.forEach(function(image) {
                      image.visible = false;
                 });
                scope.gallery.images[scope.index].visible = true;
             })
                
         }
        }

    })

    .directive('goDown',function($window, $document) {
       return  {
            restrict: "EA",
            // scope: {
            //         goNext : '='
            // },
            link: function(scope, element,attrs ) {
                 $win = angular.element($window);

                  element.on('click',function() {
                      eleParent = element.parent();
                      let eleTop = eleParent.offset().top + eleParent.height();
  
                      scrollToNext(eleTop, 400);
                  })


                  function scrollToNext(eleTop, duration) {
                    //   var scrollStep = eleTop / (duration / 5);
                          
                      var scrollInterval = setInterval(function(){  
                        if (window.scrollY <= eleTop ) {
                          window.scrollBy(0, 10);
                        } else {
                          clearInterval(scrollInterval); 
                        } 
                        if($document.height() <= parseInt($window.innerHeight) + parseInt(window.scrollY)) {
                             clearInterval(scrollInterval); 
                        }
                      },1);	
                  }
            }
        }
    })

    .directive('sectionNav',function($location, $window, $timeout) {
        return {
            restrict:'AE',
            link:function(scope,element,attrs) {
             let  eleTop = element.offset().top;

             angular.element(window).on('resize',function() {
                eleTop = element.offset().top;
               
              });
              
             userScrolled = false;

              angular.element(window).on('scroll',function() {
              userScrolled = true;

             let  winScroll = $window.scrollY;
             if(winScroll > eleTop) {
                    element.addClass('active'); userScrolled = false;
                }
            else {
                element.removeClass('active');
            }

              });

              
            
            //  let intV =  setInterval(function() {
            //    let  winScroll = $window.scrollY;
            //      console.log(winScroll)
            //     if (userScrolled) {
            //        if(winScroll > eleTop) {
            //           element.addClass('active'); userScrolled = false; }
            //        else {
            //           element.removeClass('active');
            //        }
            //     } 
            //   }, 10);

            }
        }
    })