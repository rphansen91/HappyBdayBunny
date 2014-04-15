var birthday = angular.module('Bday', ['ngAnimate', 'ui.router']);

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