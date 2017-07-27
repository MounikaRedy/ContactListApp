function AppCtrl($scope) {
	console.log("hello")

	person1 = {
		name: "mounika",
		email: "mounika@gmail.com",
		number: "814-384-6835"
	};


	person2 = {
		name: "vishal",
		email: "vishal@gmail.com",
		number: "813-335-5928"
	};

	person3 = {
		name: "varshika",
		email: "varsh@gmail.com",
		number: "966-633-6176"
	};

	var contactlist =[person1, person2, person3]
	$scope.contactlist = contactlist;

}