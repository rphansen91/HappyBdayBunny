function greetingsCtrl($scope){
	$scope.messages = [
		{
			author:'Ryan',
			img:'/HappyBdayBunny/img/greetings/ryan/ryan.jpg',
			mes:"Happy Bithday Mom! I wanted to get everyone together to wish you a happy birthday! Miss you, and I hope you enjoy your e-card!"
		},
		{
			author:'Ali',
			img:'/HappyBdayBunny/img/greetings/ali/ali.jpg',
			mes:'Happy Birthday Mommy! I hope you hsve a great day today. I miss you very much and wish I could spend the day with you but I will see you very soon. Ray says, "You are beautiful and I love you. Never change."' 
		},
		{
			author:'Ashley',
			img:'/HappyBdayBunny/img/greetings/ashley/ashley.jpg',
			mes:'Happy birthday to an amazing woman I am lucky to call Mom! I hope you have the best day, you deserve nothing less!  Wish we could be there to celebrate with you!'
		},
		{
			author:'Garrett',
			img:'/HappyBdayBunny/img/greetings/garrett/garrett.jpg',
			mes:'Happy birthday Benita! Hope it is a great one! Hope you can spend some time enjoying your new garden!!'
		},
		{
			author:'Denise',
			img:'/HappyBdayBunny/img/greetings/denise/denise.jpg',
			mes:false,
			vid:'//www.youtube.com/embed/1ZD_XdXh6KM'
		},
		{
			author:'Dave & Sue',
			img:'/HappyBdayBunny/img/greetings/david/davensue.jpg',
			mes:false,
			vid:'//www.youtube.com/embed/talbHP6HW7E'
		}
	];
	$scope.note=true;
};