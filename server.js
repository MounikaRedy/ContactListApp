var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
	console.log("I received a GET request")

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

	var contactlist =[person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server Running on port 3000");