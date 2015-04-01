//Require modules we need:
var express = require('express'),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

// instantiate express app:
var app = express();

// set view engine to be EJS:
app.set('view engine', 'ejs');

// set up body parser:
app.use(bodyParser.urlencoded({extended: false}));

// set up method override to work with post requests with parameter "_method=DELETE":
app.use(methodOverride('_method'));

// declare variables for the 4 different solutions
var solA;
var solS
var solM;
var solD;

// renders the solution to the function in appropriate space
app.get('/', function(req, res) {
	res.render('index', {solutionA: solA, 
						solutionS: solS,
						solutionM: solM,
						solutionD: solD})
});

// addition function: sets solution to answer and sets other 3 to null
app.post('/add', function(req, res) {
	x = Number(req.body.number1);
	y = Number(req.body.number2);
	solA = x + y;
	solS = null;
	solM = null;
	solD = null;
	res.redirect('/');
});

// subtraction function: sets solution to answer and sets other 3 to null
app.post('/sub', function(req, res) {
	x = Number(req.body.number3);
	y = Number(req.body.number4);
	solS = x - y;
	solA = null;
	solM = null;
	solD = null;
	res.redirect('/');
});

// multiplication function: sets solution to answer and sets other 3 to null
app.post('/mult', function(req, res) {
	x = Number(req.body.number5);
	y = Number(req.body.number6);
	solM = x * y;
	solA = null;
	solS = null;
	solD = null;
	res.redirect('/');
});

// division function: sets solution to answer and sets other 3 to null
app.post('/div', function(req, res) {
	x = Number(req.body.number7);
	y = Number(req.body.number8);
	solD = x / y;
	solA = null;
	solS = null;
	solM = null;
	res.redirect('/');
});

//set local host to 3000
app.listen(3000);