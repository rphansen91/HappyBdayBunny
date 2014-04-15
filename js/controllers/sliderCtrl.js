function sliderCtrl($scope) {
	$scope.slides = [
		{
			src:'/img/home/wedding.jpg',
			title:'HAPPY BIRTHDAY',
			caption:'YOU ARE LOVED SO MUCH',
			state:'greetings',
			btn:'GREETINGS'
		},
		{
			src:'/img/home/graduation.jpg',
			title:'WHAT A GREAT YEAR',
			caption:'LOOK BACK',
			state:'photos',
			btn:'PHOTOS'
		}
	];
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