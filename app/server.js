var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

var port = 3343;
var title = 'Batman v Superman: Dawn of Justice';
var year = '2016';
var url = 'http://www.omdbapi.com/?t=' + title + '&y=' + year + '&plot=short&r=json';
request(url, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		var jsonBody = JSON.parse(body);
		console.log(jsonBody.Year); // Show the HTML for the Google homepage.
	}
});


app.listen(port, function() {
	console.log(`App listening on port ${port}...`);
});
