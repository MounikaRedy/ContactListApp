function AppCtrl($scope, $http) {
	console.log("hello");

	$http.get('/contactlist')

	person1 = {
		Name: "mounika",
		Email: "mounika@gmail.com",
		Number: "814-384-6835"
	};


	person2 = {
		Name: "vishal",
		Email: "vishal@gmail.com",
		Number: "813-335-5928"
	};

	person3 = {
		Name: "varshika",
		Email: "varsh@gmail.com",
		Number: "966-633-6176"
	};

	var contactlist =[person1, person2, person3]
	$scope.contactlist = contactlist;

}