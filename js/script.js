
var birthday = angular.module('Bday', ['ngAnimate', 'ui.router','ui.bootstrap']);

birthday.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl : 'views/home.html',
			controller: 'sliderCtrl'
		})
		.state('greetings', {
			url: '/greetings',
			templateUrl : 'views/greetings.html',
			controller: 'greetingsCtrl'
		})
		.state('photos', {
			url: '/photos',
			templateUrl : 'views/photos.html',
			controller : 'photosCtrl'
		})
});

birthday.directive('slider', function($timeout){
	return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {
    	scope.currentIndex = 0; // Initially the index is at the first image
 
		scope.next = function() {
		  scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
		};
		 
		scope.prev = function() {
		  scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
		};

		scope.$watch('currentIndex', function() {
		  scope.images.forEach(function(image) {
		    image.visible = false; // make every image invisible
		  });
		 
		  scope.images[scope.currentIndex].visible = true; // make the current image visible
		});
		var timer;
		var sliderFunc = function() {
		  timer = $timeout(function() {
		    scope.next();
		    timer = $timeout(sliderFunc, 5000);
		  }, 5000);
		};
		 
		sliderFunc();
		 
		scope.$on('$destroy', function() {
		  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
		});
    },
    templateUrl: 'views/templates/templateurl.html'
  };	
});
birthday.animation('.slide-animation', function(){
	return {
        addClass: function (element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });                   
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
});