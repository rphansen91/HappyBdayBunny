function sliderCtrl($scope) {
	$scope.slides = 
		{
			src:'/HappyBdayBunny/img/home/wedding.jpg',
			title:'HAPPY BIRTHDAY',
			state:'greetings',
			btn:'GREETINGS'
		};

	$scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
       return $scope.currentIndex === index;
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
};