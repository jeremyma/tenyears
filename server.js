const express = require('express');


const app = express();

app.set('view engine', 'pug');

// var googleMapsClient = require('@google/maps').createClient({
//   key: ''
// });

app.use(express.static('static'));

app.get('/', function(req, res) {
	 res.render('index')
});


app.listen(3000, function() {
	console.log("Server started at 3000");
});



